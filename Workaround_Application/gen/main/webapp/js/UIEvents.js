
Ext.define("xcp_object_checkedin",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_object_checkedin",
      "publishAcrossTabs" : true,
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "newId",
        "type" : "STRING"
      }, {
        "name" : "type",
        "type" : "STRING"
      }, {
        "name" : "last_checkin_version",
        "type" : "STRING"
      }, {
        "name" : "latest_checkin_version",
        "type" : "STRING"
      }, {
        "name" : "last_modified_date",
        "type" : "DATETIME"
      }, {
        "name" : "latest_modified_date",
        "type" : "DATETIME"
      } ]
    }
);

Ext.define("xcp_refresh_page_form",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_refresh_page_form",
      "scope" : "page",
      "fields" : [ ]
    }
);

Ext.define("xcp_refresh_fragment_form",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_refresh_fragment_form",
      "scope" : "fragment",
      "fields" : [ ]
    }
);

Ext.define("xcp_task_acquired",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_task_acquired",
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_on_fragment_form_unload",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_on_fragment_form_unload",
      "scope" : "fragment",
      "fields" : [ {
        "name" : "fragmentid",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_file_upload_success",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_file_upload_success",
      "scope" : "application",
      "fields" : [ {
        "name" : "fileid",
        "type" : "STRING"
      }, {
        "name" : "filename",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_task_assigned",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_task_assigned",
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_on_navigation_compl",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_on_navigation_compl",
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "modelname",
        "type" : "STRING"
      }, {
        "name" : "pagename",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_action_flow_step_page_load",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_action_flow_step_page_load",
      "scope" : "actionflow",
      "fields" : [ {
        "name" : "stepId",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_object_unlocked",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_object_unlocked",
      "publishAcrossTabs" : true,
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "type",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_on_fragment_unload",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_on_fragment_unload",
      "scope" : "fragment",
      "fields" : [ {
        "name" : "fragmentid",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_workqueue_change",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_workqueue_change",
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_on_error",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_on_error",
      "scope" : "application",
      "fields" : [ {
        "name" : "errorcode",
        "type" : "STRING"
      }, {
        "name" : "message",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_task_hold",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_task_hold",
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_on_page_load",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_on_page_load",
      "scope" : "page",
      "fields" : [ {
        "name" : "modelname",
        "type" : "STRING"
      }, {
        "name" : "pagename",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_on_form_load",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_on_form_load",
      "scope" : "page",
      "fields" : [ ]
    }
);

Ext.define("xcp_on_initialize",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_on_initialize",
      "scope" : "application",
      "fields" : [ ]
    }
);

Ext.define("xcp_get_next_task",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_get_next_task",
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_on_preferences_load",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_on_preferences_load",
      "scope" : "application",
      "fields" : [ {
        "name" : "role",
        "type" : "STRING"
      }, {
        "name" : "workflowautonexttask",
        "type" : "BOOLEAN"
      }, {
        "name" : "delegate_task",
        "type" : "BOOLEAN"
      }, {
        "name" : "delegatetouser",
        "type" : "STRING"
      }, {
        "name" : "networklocation",
        "type" : "STRING"
      }, {
        "name" : "locale",
        "type" : "STRING"
      }, {
        "name" : "enable_client_plugin",
        "type" : "BOOLEAN"
      } ]
    }
);

Ext.define("xcp_action_flow_next_clicked",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_action_flow_next_clicked",
      "scope" : "actionflow",
      "fields" : [ {
        "name" : "stepId",
        "type" : "STRING"
      }, {
        "name" : "nextStepId",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_task_resumed",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_task_resumed",
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_lwobject_materialized",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_lwobject_materialized",
      "publishAcrossTabs" : true,
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "type",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_task_delegate",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_task_delegate",
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_action_flow_launched",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_action_flow_launched",
      "scope" : "actionflow",
      "fields" : [ {
        "name" : "stepId",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_relation_created",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_relation_created",
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_object_imported",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_object_imported",
      "publishAcrossTabs" : true,
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "type",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_file_upload_failure",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_file_upload_failure",
      "scope" : "application",
      "fields" : [ {
        "name" : "filename",
        "type" : "STRING"
      }, {
        "name" : "errormessage",
        "type" : "STRING"
      }, {
        "name" : "errorid",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_refresh_page",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_refresh_page",
      "scope" : "page",
      "fields" : [ ]
    }
);

Ext.define("xcp_task_reassigned",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_task_reassigned",
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_object_copied",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_object_copied",
      "publishAcrossTabs" : true,
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "newId",
        "type" : "STRING"
      }, {
        "name" : "targetId",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_object_created",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_object_created",
      "publishAcrossTabs" : true,
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "type",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_clear_file_uploaded",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_clear_file_uploaded",
      "scope" : "application",
      "fields" : [ {
        "name" : "fileid",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_action_flow_previous_clicked",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_action_flow_previous_clicked",
      "scope" : "actionflow",
      "fields" : [ {
        "name" : "stepId",
        "type" : "STRING"
      }, {
        "name" : "previousStepId",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_object_modified",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_object_modified",
      "publishAcrossTabs" : true,
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "type",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_on_navigation",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_on_navigation",
      "scope" : "application",
      "fields" : [ {
        "name" : "previd",
        "type" : "STRING"
      }, {
        "name" : "prevmodelname",
        "type" : "STRING"
      }, {
        "name" : "prevpagename",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_navigate_to_page",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_navigate_to_page",
      "scope" : "application",
      "fields" : [ {
        "name" : "page_id",
        "type" : "STRING"
      }, {
        "name" : "page_object_id",
        "type" : "STRING"
      }, {
        "name" : "external_url",
        "type" : "STRING"
      }, {
        "name" : "new_browser_tab",
        "type" : "BOOLEAN"
      }, {
        "name" : "browser_tab_target",
        "type" : "STRING"
      }, {
        "name" : "browser_tab_url_params",
        "type" : "STRING"
      }, {
        "name" : "force_navigate",
        "type" : "BOOLEAN"
      } ]
    }
);

Ext.define("xcp_task_rejected",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_task_rejected",
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_comment_created",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_comment_created",
      "scope" : "application",
      "fields" : [ {
        "name" : "commentId",
        "type" : "STRING"
      }, {
        "name" : "objectId",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_object_deleted",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_object_deleted",
      "publishAcrossTabs" : true,
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "type",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_show_error",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_show_error",
      "scope" : "application",
      "fields" : [ {
        "name" : "error_message",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_comment_deleted",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_comment_deleted",
      "scope" : "application",
      "fields" : [ {
        "name" : "commentId",
        "type" : "STRING"
      }, {
        "name" : "objectId",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_object_locked",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_object_locked",
      "publishAcrossTabs" : true,
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "type",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_content_extracted",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_content_extracted",
      "scope" : "application",
      "fields" : [ {
        "name" : "contentId",
        "type" : "STRING"
      }, {
        "name" : "newContentId",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_task_unhold",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_task_unhold",
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_on_form_unload",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_on_form_unload",
      "scope" : "page",
      "fields" : [ ]
    }
);

Ext.define("xcp_content_removed",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_content_removed",
      "scope" : "application",
      "fields" : [ {
        "name" : "contentId",
        "type" : "STRING"
      }, {
        "name" : "newContentId",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_show_notification",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_show_notification",
      "scope" : "application",
      "fields" : [ {
        "name" : "notification_message",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_on_logout",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_on_logout",
      "publishAcrossTabs" : true,
      "scope" : "application",
      "fields" : [ ]
    }
);

Ext.define("xcp_task_halt",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_task_halt",
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_comment_viewed",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_comment_viewed",
      "scope" : "application",
      "fields" : [ {
        "name" : "commentId",
        "type" : "STRING"
      }, {
        "name" : "objectId",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_on_page_unload",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_on_page_unload",
      "scope" : "page",
      "fields" : [ {
        "name" : "modelname",
        "type" : "STRING"
      }, {
        "name" : "pagename",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_on_fragment_form_load",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_on_fragment_form_load",
      "scope" : "fragment",
      "fields" : [ {
        "name" : "fragmentid",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_task_repeated",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_task_repeated",
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_comment_updated",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_comment_updated",
      "scope" : "application",
      "fields" : [ {
        "name" : "commentId",
        "type" : "STRING"
      }, {
        "name" : "objectId",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_task_completed",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_task_completed",
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_lwobject_dematerialized",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_lwobject_dematerialized",
      "publishAcrossTabs" : true,
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "type",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_content_reordered",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_content_reordered",
      "scope" : "application",
      "fields" : [ {
        "name" : "contentId",
        "type" : "STRING"
      }, {
        "name" : "newContentId",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_task_unassigned",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_task_unassigned",
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_refresh_step_page",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_refresh_step_page",
      "scope" : "page",
      "fields" : [ {
        "name" : "step_page_id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_on_preferences_save",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_on_preferences_save",
      "scope" : "application",
      "fields" : [ {
        "name" : "role",
        "type" : "STRING"
      }, {
        "name" : "workflowautonexttask",
        "type" : "BOOLEAN"
      }, {
        "name" : "delegate_task",
        "type" : "BOOLEAN"
      }, {
        "name" : "delegatetouser",
        "type" : "STRING"
      }, {
        "name" : "networklocation",
        "type" : "STRING"
      }, {
        "name" : "locale",
        "type" : "STRING"
      }, {
        "name" : "enable_client_plugin",
        "type" : "BOOLEAN"
      } ]
    }
);

Ext.define("xcp_content_inserted",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_content_inserted",
      "scope" : "application",
      "fields" : [ {
        "name" : "contentId",
        "type" : "STRING"
      }, {
        "name" : "newContentId",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_show_warning",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_show_warning",
      "scope" : "application",
      "fields" : [ {
        "name" : "warning_message",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_on_fragment_load",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_on_fragment_load",
      "scope" : "fragment",
      "fields" : [ {
        "name" : "fragmentid",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_object_moved",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_object_moved",
      "publishAcrossTabs" : true,
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "sourceId",
        "type" : "STRING"
      }, {
        "name" : "targetId",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_file_uploaded_list",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_file_uploaded_list",
      "scope" : "application",
      "fields" : [ {
        "name" : "fileid",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_task_updated",
    {
      "extend" : "xcp.event.ApplicationEvent",
      "applicationEventType" : "xcp_task_updated",
      "scope" : "application",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      } ]
    }
);
