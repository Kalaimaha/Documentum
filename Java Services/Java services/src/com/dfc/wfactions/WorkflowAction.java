/*
 * 1. Acquiring a Task
 * 2. Hold a Task
 * 3. Resume a Task
 * 4. Complete a Task
 */
package com.dfc.wfactions;

import com.documentum.fc.client.DfClient;
import com.documentum.fc.client.IDfCollection;
import com.documentum.fc.client.IDfPersistentObject;
import com.documentum.fc.client.IDfSession;
import com.documentum.fc.client.IDfSessionManager;
import com.documentum.fc.client.IDfWorkitem;
import com.documentum.fc.common.DfException;
import com.documentum.fc.common.DfId;
import com.documentum.fc.common.DfLoginInfo;
import com.documentum.fc.common.IDfId;
import com.documentum.fc.common.IDfLoginInfo;

public class WorkflowAction {

	static IDfSessionManager sessionMrg = null;
	static IDfSession session = null;

	public static void acquireTask(IDfId wfId, String task_performer)

	{

		try {
			IDfLoginInfo loginInfo = new DfLoginInfo();
			loginInfo.setUser("dmadmin");
			loginInfo.setPassword("Sedin@123456");
			sessionMrg = DfClient.getLocalClient().newSessionManager();

			// 'DocRepo' is a repository name
			sessionMrg.setIdentity("DocRepo", loginInfo);
			session = sessionMrg.getSession("DocRepo");
/*
 * IDfSession.getTasks() – Returns a collection of all the items in a user’s inbox.
 * Use the DF_TASKS filter to get only workflow-related tasks.
 * The getTasks() method only reteives these attributes: sent_by, date_sent, task_name, due_date, priority, task_state, r_object_id, item_id.
 * If you want to get other attributes such as the name of the document, you must specify them in the additionalAttributes argument.
 */
			IDfCollection tasks = session.getTasks(task_performer, session.DF_TASKS, null, "task_name");
			while (tasks.next()) {
				IDfPersistentObject pObj = session.getObjectByQualification(
						"dmi_queue_item where r_object_id='" + tasks.getId("r_object_id").toString() + "'");
				// Make sure the task(s) for this user are associated with the workflow
				if (pObj.getId("router_id").toString().equals(wfId.getId())) {
					IDfWorkitem wi = (IDfWorkitem) session.getObject(tasks.getId("item_id"));
					wi.acquire();
				}
			}

		} catch (DfException e) {
			e.printStackTrace();
		}

		finally {
			if (sessionMrg != null && session != null) {
				sessionMrg.release(session);
			}
		}

	}

	public static void holdTask(IDfId wfId, String task_performer) {
		try {
			IDfLoginInfo loginInfo = new DfLoginInfo();
			loginInfo.setUser("dmadmin");
			loginInfo.setPassword("Sedin@123456");
			sessionMrg = DfClient.getLocalClient().newSessionManager();

			// 'DocRepo' is a repository name
			sessionMrg.setIdentity("DocRepo", loginInfo);
			session = sessionMrg.getSession("DocRepo");

			IDfCollection tasks = session.getTasks(task_performer, session.DF_TASKS, null, "task_name");
			while (tasks.next()) {
				IDfPersistentObject pObj = session.getObjectByQualification(
						"dmi_queue_item where r_object_id='" + tasks.getId("r_object_id").toString() + "'");
				// Make sure the task(s) for this user are associated with the workflow
				if (pObj.getId("router_id").toString().equals(wfId.getId())) {
					IDfWorkitem wi = (IDfWorkitem) session.getObject(tasks.getId("item_id"));
					wi.pause();
				}
			}

		} catch (DfException e) {
			e.printStackTrace();
		}

		finally {
			if (sessionMrg != null && session != null) {
				sessionMrg.release(session);
			}
		}

	}

	public static void resumeTask(IDfId wfId, String task_performer)

	{
		try {
			IDfLoginInfo loginInfo = new DfLoginInfo();
			loginInfo.setUser("dmadmin");
			loginInfo.setPassword("Sedin@123456");
			sessionMrg = DfClient.getLocalClient().newSessionManager();

			// 'DocRepo' is a repository name
			sessionMrg.setIdentity("DocRepo", loginInfo);
			session = sessionMrg.getSession("DocRepo");

			IDfCollection tasks = session.getTasks(task_performer, session.DF_TASKS, null, "task_name");
			while (tasks.next()) {
				IDfPersistentObject pObj = session.getObjectByQualification(
						"dmi_queue_item where r_object_id='" + tasks.getId("r_object_id").toString() + "'");
				// Make sure the task(s) for this user are associated with the workflow
				if (pObj.getId("router_id").toString().equals(wfId.getId())) {
					IDfWorkitem wi = (IDfWorkitem) session.getObject(tasks.getId("item_id"));
					wi.resume();
				}
			}

		} catch (DfException e) {
			e.printStackTrace();
		}

		finally {
			if (sessionMrg != null && session != null) {
				sessionMrg.release(session);
			}
		}

	}

	public static void completeTask(IDfId wfId, String task_performer) {
		try {
			IDfLoginInfo loginInfo = new DfLoginInfo();
			loginInfo.setUser("dmadmin");
			loginInfo.setPassword("Sedin@123456");

			sessionMrg = DfClient.getLocalClient().newSessionManager();

			// 'DocRepo' is a repository name
			sessionMrg.setIdentity("DocRepo", loginInfo);
			session = sessionMrg.getSession("DocRepo");

			IDfCollection tasks = session.getTasks(task_performer, session.DF_TASKS, null, "task_name");
			while (tasks.next()) {
				IDfPersistentObject pObj = session.getObjectByQualification(
						"dmi_queue_item where r_object_id='" + tasks.getId("r_object_id").toString() + "'");
				// Make sure the task(s) for this user are associated with the workflow
				if (pObj.getId("router_id").toString().equals(wfId.getId())) {
					IDfWorkitem wi = (IDfWorkitem) session.getObject(tasks.getId("item_id"));
					wi.complete();

				}
			}

		} catch (DfException e) {
			e.printStackTrace();
		}

		finally {
			if (sessionMrg != null && session != null) {
				sessionMrg.release(session);
			}
		}

	}

	
}
