/*
 1. Creating User
 2. Add User to Group
 3. Remove Users from Group
*/
package com.dfc.usermanagement;

import com.documentum.fc.client.DfClient;
import com.documentum.fc.client.IDfGroup;
import com.documentum.fc.client.IDfSession;
import com.documentum.fc.client.IDfSessionManager;
import com.documentum.fc.client.IDfUser;
import com.documentum.fc.common.DfException;
import com.documentum.fc.common.DfId;
import com.documentum.fc.common.DfLoginInfo;
import com.documentum.fc.common.IDfId;
import com.documentum.fc.common.IDfLoginInfo;

public class UserManagement {

	static IDfSessionManager sessionMrg = null;
	static IDfSession session = null;

	public static void createUser(String user_name, String user_login_name, String user_password, String user_address) {
		try {
			IDfLoginInfo loginInfo = new DfLoginInfo();
			loginInfo.setUser("dmadmin");
			loginInfo.setPassword("Sedin@123456");
			sessionMrg = DfClient.getLocalClient().newSessionManager();

			// 'DocRepo' is a repository name
			sessionMrg.setIdentity("DocRepo", loginInfo);
			session = sessionMrg.getSession("DocRepo");
			IDfUser user = (IDfUser) session.newObject("dm_user");
			user.setUserName(user_name);
			user.setUserLoginName(user_login_name);
			user.setUserPassword(user_password);
			user.setUserAddress(user_address);
			user.save();
		} catch (DfException e) {
			e.printStackTrace();
		}

		finally {
			if (sessionMrg != null && session != null) {
				sessionMrg.release(session);
			}
		}

	}

	public static void addUserToGroup(String username, String group_id) {
		try {
			IDfLoginInfo loginInfo = new DfLoginInfo();
			loginInfo.setUser("dmadmin");
			loginInfo.setPassword("Sedin@123456");
			sessionMrg = DfClient.getLocalClient().newSessionManager();

			// 'DocRepo' is a repository name
			sessionMrg.setIdentity("DocRepo", loginInfo);
			session = sessionMrg.getSession("DocRepo");
			IDfId convertStrToID = new DfId(group_id);// While using in xcpDesigner, not able to use IDfId directly
														// while mapping so converting string to ID inside the code
			IDfGroup group = (IDfGroup) session.getObject(convertStrToID);
			group.addUser(username);
			group.save();
		} catch (DfException e) {
			e.printStackTrace();
		}

		finally {
			if (sessionMrg != null && session != null) {
				sessionMrg.release(session);
			}
		}
	}

	public static void removeUsersFromGroup(String username, String group_id) {
		try {
			IDfLoginInfo loginInfo = new DfLoginInfo();
			loginInfo.setUser("dmadmin");
			loginInfo.setPassword("Sedin@123456");
			sessionMrg = DfClient.getLocalClient().newSessionManager();

			// 'DocRepo' is a repository name
			sessionMrg.setIdentity("DocRepo", loginInfo);
			session = sessionMrg.getSession("DocRepo");
			IDfId convertStrToID = new DfId(group_id);// While using in xcpDesigner, not able to use IDfId directly
														// while mapping so converting string to ID inside the code
			IDfGroup group = (IDfGroup) session.getObject(convertStrToID);
			group.removeUser(username);
			group.save();
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
