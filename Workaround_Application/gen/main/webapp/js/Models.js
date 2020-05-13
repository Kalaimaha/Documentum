
Ext.define("xcp_RootBO",
    {
      "extend" : "xcp.data.BusinessObjectModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_RootBOs"
      },
      "idProperty" : "id",
      "isShareable" : false,
      "xcpModelType" : "xcp_RootBO",
      "fields" : [ {
        "name" : "id",
        "allowNull" : true,
        "type" : "string"
      }, {
        "defaultValue" : null,
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "object_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "a_is_hidden",
        "allowNull" : true,
        "type" : "boolean"
      }, {
        "name" : "acl_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "acl_domain",
        "allowNull" : true,
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_rootlightweightbo",
    {
      "extend" : "xcp.data.LWBusinessObjectModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_rootlightweightbos"
      },
      "idProperty" : "id",
      "xcpModelType" : "xcp_rootlightweightbo",
      "fields" : [ {
        "name" : "i_sharing_parent",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "subject",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "title",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "id",
        "allowNull" : true,
        "type" : "string"
      }, {
        "defaultValue" : null,
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "object_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "a_is_hidden",
        "allowNull" : true,
        "type" : "boolean"
      }, {
        "name" : "acl_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "acl_domain",
        "allowNull" : true,
        "type" : "string"
      } ]
    }
);

Ext.define("dm_folder",
    {
      "extend" : "xcp.data.FolderModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/dm_folders"
      },
      "idProperty" : "id",
      "xcpModelType" : "dm_folder",
      "fields" : [ {
        "defaultValue" : null,
        "name" : "authors",
        "type" : "array"
      }, {
        "defaultValue" : null,
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "title",
        "allowNull" : true,
        "type" : "string"
      }, {
        "defaultValue" : null,
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "defaultValue" : null,
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "allowNull" : true,
        "type" : "int"
      }, {
        "name" : "id",
        "allowNull" : true,
        "type" : "string"
      }, {
        "defaultValue" : null,
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "object_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "a_is_hidden",
        "allowNull" : true,
        "type" : "boolean"
      }, {
        "name" : "acl_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "acl_domain",
        "allowNull" : true,
        "type" : "string"
      }, "links" ]
    }
);

Ext.define("xcp_folderlist_0",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "type" : "xcp_rest_folder",
        "url" : "application/dm_folders"
      },
      "idProperty" : "id",
      "xcpModelType" : "dm_folder",
      "fields" : [ {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_is_hidden",
        "type" : "boolean"
      }, {
        "name" : "acl_name",
        "type" : "string"
      }, {
        "name" : "acl_domain",
        "type" : "string"
      }, {
        "name" : "icon",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, "links" ]
    }
);

Ext.define("xcp_rootlightweightcontent",
    {
      "extend" : "xcp.data.LWContentModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/xcp_rootlightweightcontents"
      },
      "idProperty" : "id",
      "xcpModelType" : "xcp_rootlightweightcontent",
      "fields" : [ {
        "name" : "owner_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "a_status",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "allowNull" : true,
        "type" : "string"
      }, {
        "defaultValue" : null,
        "name" : "authors",
        "type" : "array"
      }, {
        "defaultValue" : null,
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "title",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_content_size",
        "allowNull" : true,
        "type" : "int"
      }, {
        "defaultValue" : null,
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "i_chronicle_id",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "i_sharing_parent",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "id",
        "allowNull" : true,
        "type" : "string"
      }, {
        "defaultValue" : null,
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "object_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "a_is_hidden",
        "allowNull" : true,
        "type" : "boolean"
      }, {
        "name" : "acl_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "acl_domain",
        "allowNull" : true,
        "type" : "string"
      }, "links" ]
    }
);

Ext.define("dm_document",
    {
      "extend" : "xcp.data.ContentModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/dm_documents"
      },
      "idProperty" : "id",
      "isShareable" : false,
      "xcpModelType" : "dm_document",
      "fields" : [ {
        "name" : "owner_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "a_status",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "allowNull" : true,
        "type" : "string"
      }, {
        "defaultValue" : null,
        "name" : "authors",
        "type" : "array"
      }, {
        "defaultValue" : null,
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "title",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_content_size",
        "allowNull" : true,
        "type" : "int"
      }, {
        "defaultValue" : null,
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "i_chronicle_id",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "id",
        "allowNull" : true,
        "type" : "string"
      }, {
        "defaultValue" : null,
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "object_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "a_is_hidden",
        "allowNull" : true,
        "type" : "boolean"
      }, {
        "name" : "acl_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "acl_domain",
        "allowNull" : true,
        "type" : "string"
      }, "links" ]
    }
);

Ext.define("dm_cabinet",
    {
      "extend" : "xcp.data.CabinetModel",
      "proxy" : {
        "type" : "xcp_rest",
        "url" : "application/dm_cabinets"
      },
      "idProperty" : "id",
      "xcpModelType" : "dm_cabinet",
      "fields" : [ {
        "name" : "is_private",
        "allowNull" : true,
        "type" : "boolean"
      }, {
        "defaultValue" : null,
        "name" : "authors",
        "type" : "array"
      }, {
        "defaultValue" : null,
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "title",
        "allowNull" : true,
        "type" : "string"
      }, {
        "defaultValue" : null,
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "defaultValue" : null,
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "allowNull" : true,
        "type" : "int"
      }, {
        "name" : "id",
        "allowNull" : true,
        "type" : "string"
      }, {
        "defaultValue" : null,
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "object_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "a_is_hidden",
        "allowNull" : true,
        "type" : "boolean"
      }, {
        "name" : "acl_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "acl_domain",
        "allowNull" : true,
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_currenttask",
    {
      "extend" : "xcp.data.Model",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "act_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "qitem_id",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "creation_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "due_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "performer",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "performer_address",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "priority",
        "allowNull" : true,
        "type" : "int"
      }, {
        "name" : "state",
        "allowNull" : true,
        "type" : "int"
      }, {
        "name" : "name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "task_subject",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "queue_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "instructions",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "description",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "received_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "received_from",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "requirements",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "isdelegable",
        "allowNull" : true,
        "type" : "boolean"
      }, {
        "name" : "isrepeatable",
        "allowNull" : true,
        "type" : "boolean"
      }, {
        "name" : "activity_system_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_taskworkflow",
    {
      "extend" : "xcp.data.WorkflowModel",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "correlation_identifier",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "process_id",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_creater_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_start_date",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "object_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "r_runtime_state",
        "allowNull" : true,
        "type" : "int"
      }, {
        "name" : "supervisor_name",
        "allowNull" : true,
        "type" : "string"
      }, {
        "name" : "supervisor_address",
        "allowNull" : true,
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_ExecutionData",
    {
      "extend" : "xcp.data.Model",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "currenttask",
        "type" : "xcp_currenttask"
      }, {
        "name" : "taskworkflow",
        "type" : "xcp_taskworkflow"
      } ]
    }
);

Ext.define("xcp_taskhistory_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "process_instance_id",
        "type" : "string"
      }, {
        "name" : "performer",
        "type" : "array"
      }, {
        "name" : "date",
        "type" : "array"
      }, {
        "name" : "activity_name",
        "type" : "array"
      }, {
        "name" : "status",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_process_xcp_taskhistory",
    {
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "extraParams" : {
          "type" : "taskhistory"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks"
      },
      "idProperty" : "id",
      "xcpModelType" : "xcp_taskhistory",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_taskhistory_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_fetchtypes_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "inputs",
        "type" : "array"
      }, {
        "name" : "inputs_label",
        "type" : "array"
      }, {
        "name" : "outputs_label",
        "type" : "array"
      }, {
        "name" : "outputs",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_process_xcp_fetchtypes",
    {
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "extraParams" : {
          "type" : "fetchtypes"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks"
      },
      "idProperty" : "id",
      "xcpModelType" : "xcp_fetchtypes",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_fetchtypes_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_getfolderid_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "folder_path",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_process_xcp_getfolderid",
    {
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "extraParams" : {
          "type" : "getfolderid"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks"
      },
      "idProperty" : "id",
      "xcpModelType" : "xcp_getfolderid",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_getfolderid_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_activity_list_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "process_id",
        "type" : "string"
      }, {
        "name" : "act_name",
        "type" : "string"
      }, {
        "name" : "port_type",
        "type" : "string"
      }, {
        "name" : "output_activity_names",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_process_xcp_activity_list",
    {
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "extraParams" : {
          "type" : "activity_list"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks"
      },
      "idProperty" : "id",
      "xcpModelType" : "xcp_activity_list",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_activity_list_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_process_xcp_OOTBProcess",
    {
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "extraParams" : {
          "type" : "OOTBProcess"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks"
      },
      "idProperty" : "id",
      "xcpModelType" : "xcp_OOTBProcess",
      "fields" : [ {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "starts_with_filter",
        "type" : "string"
      }, {
        "name" : "user_group_name",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_process_xcp_userorgroup_selecti",
    {
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "extraParams" : {
          "type" : "userorgroup_selecti"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks"
      },
      "idProperty" : "id",
      "xcpModelType" : "xcp_userorgroup_selecti",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_userorgroup_selecti_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_user_from_queue_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "user_list",
        "type" : "array"
      }, {
        "name" : "queue_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_process_xcp_user_from_queue",
    {
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "extraParams" : {
          "type" : "user_from_queue"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks"
      },
      "idProperty" : "id",
      "xcpModelType" : "xcp_user_from_queue",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_user_from_queue_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_fetchcontenttypes_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "content_types",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_process_xcp_fetchcontenttypes",
    {
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "extraParams" : {
          "type" : "fetchcontenttypes"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks"
      },
      "idProperty" : "id",
      "xcpModelType" : "xcp_fetchcontenttypes",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_fetchcontenttypes_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_fetchcontentformats_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "dos_extension",
        "type" : "string"
      }, {
        "name" : "format_name",
        "type" : "array"
      }, {
        "name" : "format_description",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_process_xcp_fetchcontentformats",
    {
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "extraParams" : {
          "type" : "fetchcontentformats"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks"
      },
      "idProperty" : "id",
      "xcpModelType" : "xcp_fetchcontentformats",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_fetchcontentformats_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_queue_list_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "queuelist",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_process_xcp_queue_list",
    {
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "extraParams" : {
          "type" : "queue_list"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks"
      },
      "idProperty" : "id",
      "xcpModelType" : "xcp_queue_list",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_queue_list_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_fetch_userorgroup_contain_filter_processVariables",
    {
      "extend" : "xcp.data.IdLessModel",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "user_group_name",
        "type" : "array"
      }, {
        "name" : "contain_filter",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_process_xcp_fetch_userorgroup_contain_filter",
    {
      "extend" : "xcp.data.TaskModel",
      "proxy" : {
        "data" : {
          "processVariables" : {
          }
        },
        "extraParams" : {
          "type" : "fetch_userorgroup_contain_filter"
        },
        "type" : "xcp_rest",
        "url" : "application/tasks"
      },
      "idProperty" : "id",
      "xcpModelType" : "xcp_fetch_userorgroup_contain_filter",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_fetch_userorgroup_contain_filter_processVariables"
      }, {
        "name" : "executionData",
        "type" : "xcp_ExecutionData"
      }, {
        "name" : "attachments",
        "type" : "array"
      }, {
        "name" : "userName",
        "type" : "array"
      }, {
        "name" : "signOffPassword",
        "type" : "string"
      }, {
        "name" : "path",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_reject_currenttask",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "extraParams" : {
          "type" : "xcp_da_def_reject_currenttask"
        },
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : null
      },
      "idProperty" : "id",
      "xcpActionType" : "custom",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_delegate_currenttask",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "extraParams" : {
          "type" : "xcp_da_def_delegate_currenttask"
        },
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : null
      },
      "idProperty" : "id",
      "xcpActionType" : "custom",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_logout",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "extraParams" : {
          "type" : "xcp_logout"
        },
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : null
      },
      "idProperty" : "id",
      "xcpActionType" : "custom",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_complete_currenttask",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "extraParams" : {
          "type" : "xcp_da_def_complete_currenttask"
        },
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : null
      },
      "idProperty" : "id",
      "xcpActionType" : "custom",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_repeat_currenttask",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "extraParams" : {
          "type" : "xcp_da_def_repeat_currenttask"
        },
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : null
      },
      "idProperty" : "id",
      "xcpActionType" : "custom",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_da_def_download_dm_document",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "extraParams" : {
          "type" : "xcp_da_def_download_dm_document"
        },
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : null
      },
      "idProperty" : "id",
      "xcpActionType" : "custom",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "id",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_ExportToCSV",
    {
      "extend" : "xcp.data.Model",
      "proxy" : {
        "extraParams" : {
          "type" : "xcp_ExportToCSV"
        },
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : null
      },
      "idProperty" : "id",
      "xcpActionType" : "custom",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "widgetid",
        "type" : "string"
      }, {
        "name" : "page_size",
        "type" : "int"
      }, {
        "name" : "file_name",
        "type" : "string"
      }, {
        "name" : "selected_columns",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_taskhistory_initiate_staless_ds"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_taskhistory_initiate"
      },
      "xcpModelType" : "xcp_taskhistory",
      "fields" : [ {
        "name" : "activity_name",
        "type" : "string"
      }, {
        "name" : "date",
        "type" : "string"
      }, {
        "name" : "performer",
        "type" : "string"
      }, {
        "name" : "status",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_staless_ds_inputs_processVariables",
    {
      "extend" : "xcp.data.Model",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "process_instance_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_taskhistory_initiate_staless_ds_inputs",
    {
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "extraParams" : {
          "type" : "stateless"
        },
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_taskhistory_initiate_staless_dss"
      },
      "xcpModelType" : "xcp_taskhistory",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_taskhistory_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_ds_read_rootbo_outputs",
    {
      "extend" : "xcp.data.ReadModel",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_ds_read_rootbo"
        },
        "type" : "xcp_rest",
        "url" : "pplication/xcp_rootbos"
      },
      "xcpModelType" : "xcp_RootBO",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_is_hidden",
        "type" : "boolean"
      }, {
        "name" : "acl_name",
        "type" : "string"
      }, {
        "name" : "acl_domain",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_ds_read_rootbo_defaults_outputs",
    {
      "extend" : "xcp.data.ReadDefaultModel",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_ds_read_rootbo_defaults"
        },
        "type" : "xcp_rest",
        "url" : "pplication/xcp_rootbos"
      },
      "xcpModelType" : "xcp_RootBO",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "acl_name",
        "type" : "string"
      }, {
        "name" : "acl_domain",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_ds_read_rootsharedbo_outputs",
    {
      "extend" : "xcp_ds_read_rootbo_outputs",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_ds_read_rootsharedbo"
        },
        "type" : "xcp_rest",
        "url" : "pplication/xcp_rootsharedbos"
      },
      "xcpModelType" : "xcp_rootsharedbo",
      "fields" : [ {
        "name" : "i_sharing_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_fetchtypes_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_fetchtypes_initiate_staless_ds"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_fetchtypes_initiate"
      },
      "xcpModelType" : "xcp_fetchtypes",
      "fields" : [ {
        "name" : "outputs_label",
        "type" : "string"
      }, {
        "name" : "outputs",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_fetchtypes_initiate_staless_ds_inputs_processVariables",
    {
      "extend" : "xcp.data.Model",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "inputs_label",
        "type" : "array"
      }, {
        "name" : "inputs",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_fetchtypes_initiate_staless_ds_inputs",
    {
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "extraParams" : {
          "type" : "stateless"
        },
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_fetchtypes_initiate_staless_dss"
      },
      "xcpModelType" : "xcp_fetchtypes",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_fetchtypes_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_folder_rt_query_outputs",
    {
      "extend" : "xcp.data.RealTimeDataSourceModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_folder_rt_query"
        },
        "type" : "xcp_rest",
        "url" : "application/dm_folders"
      },
      "xcpModelType" : "xcp_folder_rt_query",
      "fields" : [ {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_folderQuery_outputs",
    {
      "extend" : "xcp.data.FolderContentModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "folderQuery"
        },
        "type" : "xcp_rest",
        "url" : "application/sysobject"
      },
      "linkrel" : "http://identifiers.emc.com/linkrel/objects",
      "xcpModelType" : "dm_folder",
      "fields" : [ {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "icon",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_link_cnt",
        "type" : "int"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      } ]
    }
);

Ext.define("xcp_ds_read_dm_folder_outputs",
    {
      "extend" : "xcp.data.ReadModel",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_ds_read_dm_folder"
        },
        "type" : "xcp_rest",
        "url" : "pplication/dm_folders"
      },
      "xcpModelType" : "dm_folder",
      "fields" : [ {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_is_hidden",
        "type" : "boolean"
      }, {
        "name" : "acl_name",
        "type" : "string"
      }, {
        "name" : "acl_domain",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_ds_read_dm_folder_defaults_outputs",
    {
      "extend" : "xcp.data.ReadDefaultModel",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_ds_read_dm_folder_defaults"
        },
        "type" : "xcp_rest",
        "url" : "pplication/dm_folders"
      },
      "xcpModelType" : "dm_folder",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "a_is_hidden",
        "type" : "boolean"
      }, {
        "name" : "acl_name",
        "type" : "string"
      }, {
        "name" : "acl_domain",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_getfolderid_initiate_staless_ds_outputs_processVariables",
    {
      "extend" : "xcp.data.Model",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "folder_id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_getfolderid_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_getfolderid_initiate_staless_ds"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_getfolderid_initiate"
      },
      "xcpModelType" : "xcp_getfolderid",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_getfolderid_initiate_staless_ds_outputs_processVariables"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_getfolderid_initiate_staless_ds_inputs_processVariables",
    {
      "extend" : "xcp.data.Model",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "folder_path",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_getfolderid_initiate_staless_ds_inputs",
    {
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "extraParams" : {
          "type" : "stateless"
        },
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_getfolderid_initiate_staless_dss"
      },
      "xcpModelType" : "xcp_getfolderid",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_getfolderid_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_ds_read_lightweight_content_outputs",
    {
      "extend" : "xcp.data.ReadModel",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_ds_read_lightweight_content"
        },
        "type" : "xcp_rest",
        "url" : "pplication/xcp_rootlightweightcontents"
      },
      "xcpModelType" : "",
      "fields" : [ {
        "name" : "owner_name",
        "type" : "string"
      }, {
        "name" : "a_status",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_content_size",
        "type" : "int"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "i_chronicle_id",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "i_sharing_parent",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_activity_list_initiate_staless_ds"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_activity_list_initiate"
      },
      "xcpModelType" : "xcp_activity_list",
      "fields" : [ {
        "name" : "output_activity_names",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_staless_ds_inputs_processVariables",
    {
      "extend" : "xcp.data.Model",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "port_type",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_activity_list_initiate_staless_ds_inputs",
    {
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "extraParams" : {
          "type" : "stateless"
        },
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_activity_list_initiate_staless_dss"
      },
      "xcpModelType" : "xcp_activity_list",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_activity_list_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_ds_read_dm_cabinet_outputs",
    {
      "extend" : "xcp.data.ReadModel",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_ds_read_dm_cabinet"
        },
        "type" : "xcp_rest",
        "url" : "pplication/dm_cabinets"
      },
      "xcpModelType" : "dm_cabinet",
      "fields" : [ {
        "name" : "is_private",
        "type" : "boolean"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_folder_path",
        "type" : "array"
      }, {
        "name" : "r_link_cnt",
        "type" : "int"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_is_hidden",
        "type" : "boolean"
      }, {
        "name" : "acl_name",
        "type" : "string"
      }, {
        "name" : "acl_domain",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_ds_read_dm_cabinet_defaults_outputs",
    {
      "extend" : "xcp.data.ReadDefaultModel",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_ds_read_dm_cabinet_defaults"
        },
        "type" : "xcp_rest",
        "url" : "pplication/dm_cabinets"
      },
      "xcpModelType" : "dm_cabinet",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "a_is_hidden",
        "type" : "boolean"
      }, {
        "name" : "acl_name",
        "type" : "string"
      }, {
        "name" : "acl_domain",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_versionHistoryQuery_outputs",
    {
      "extend" : "versions_history_model",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "versionHistoryQuery"
        },
        "type" : "xcp_rest",
        "url" : "application/sysobject"
      },
      "xcpModelType" : "dm_document",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_networklocation_selecti_ds_outputs",
    {
      "extend" : "network_location_model",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_networklocation_selecti_ds"
        },
        "type" : "xcp_rest",
        "url" : "application/networkLocations"
      },
      "xcpModelType" : "dm_document",
      "fields" : [ {
        "name" : "location_id",
        "type" : "string"
      }, {
        "name" : "location_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_attachment_viewer_ds_outputs",
    {
      "extend" : "xcp.data.RealTimeDataSourceModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_attachment_viewer_ds"
        },
        "type" : "xcp_rest",
        "url" : "application/dm_documents"
      },
      "xcpModelType" : "attachment_viewer_ds",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_ds_collection_content_templates_outputs",
    {
      "extend" : "xcp.data.ContentTemplateModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_ds_collection_content_templates"
        },
        "type" : "xcp_rest",
        "url" : "pplication/dm_documents"
      },
      "xcpModelType" : "xcp_repository",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_ds_collection_templates_formats_outputs",
    {
      "extend" : "xcp.data.ContentTemplateFormatsModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_ds_collection_templates_formats"
        },
        "type" : "xcp_rest",
        "url" : "pplication/dm_documents"
      },
      "xcpModelType" : "xcp_repository",
      "fields" : [ {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_ds_user_roles_outputs",
    {
      "extend" : "user_role_model",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_ds_user_roles"
        },
        "type" : "xcp_rest",
        "url" : "pplication/dm_documents"
      },
      "xcpModelType" : "xcp_member",
      "fields" : [ {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "label",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_ds_read_dm_document_outputs",
    {
      "extend" : "xcp.data.ReadModel",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_ds_read_dm_document"
        },
        "type" : "xcp_rest",
        "url" : "pplication/dm_documents"
      },
      "xcpModelType" : "dm_document",
      "fields" : [ {
        "name" : "owner_name",
        "type" : "string"
      }, {
        "name" : "a_status",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "authors",
        "type" : "array"
      }, {
        "name" : "keywords",
        "type" : "array"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_content_size",
        "type" : "int"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "i_chronicle_id",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_is_hidden",
        "type" : "boolean"
      }, {
        "name" : "acl_name",
        "type" : "string"
      }, {
        "name" : "acl_domain",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_ds_read_dm_document_defaults_outputs",
    {
      "extend" : "xcp.data.ReadDefaultModel",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_ds_read_dm_document_defaults"
        },
        "type" : "xcp_rest",
        "url" : "pplication/dm_documents"
      },
      "xcpModelType" : "dm_document",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "subject",
        "type" : "string"
      }, {
        "name" : "title",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "a_is_hidden",
        "type" : "boolean"
      }, {
        "name" : "acl_name",
        "type" : "string"
      }, {
        "name" : "acl_domain",
        "type" : "string"
      }, {
        "name" : "source",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_staless_ds_outputs",
    {
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_userorgroup_selecti_staless_ds"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_userorgroup_selecti"
      },
      "xcpModelType" : "xcp_userorgroup_selecti",
      "fields" : [ {
        "name" : "user_group_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_staless_ds_inputs_processVariables",
    {
      "extend" : "xcp.data.Model",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "starts_with_filter",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_userorgroup_selecti_staless_ds_inputs",
    {
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "extraParams" : {
          "type" : "stateless"
        },
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_userorgroup_selecti_staless_dss"
      },
      "xcpModelType" : "xcp_userorgroup_selecti",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_userorgroup_selecti_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_user_from_queue_initiate_staless_ds"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_user_from_queue_initiate"
      },
      "xcpModelType" : "xcp_user_from_queue",
      "fields" : [ {
        "name" : "user_list",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_staless_ds_inputs_processVariables",
    {
      "extend" : "xcp.data.Model",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_user_from_queue_initiate_staless_ds_inputs",
    {
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "extraParams" : {
          "type" : "stateless"
        },
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_user_from_queue_initiate_staless_dss"
      },
      "xcpModelType" : "xcp_user_from_queue",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_user_from_queue_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_fetchcontenttypes_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_fetchcontenttypes_initiate_staless_ds"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_fetchcontenttypes_initiate"
      },
      "xcpModelType" : "xcp_fetchcontenttypes",
      "fields" : [ {
        "name" : "content_types",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_fetchcontenttypes_initiate_staless_ds_inputs",
    {
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "extraParams" : {
          "type" : "stateless"
        },
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_fetchcontenttypes_initiate_staless_dss"
      },
      "xcpModelType" : "xcp_fetchcontenttypes",
      "fields" : [ ]
    }
);

Ext.define("xcp_ds_read_lightweightbo_outputs",
    {
      "extend" : "xcp.data.ReadModel",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_ds_read_lightweightbo"
        },
        "type" : "xcp_rest",
        "url" : "pplication/xcp_rootlightweightbos"
      },
      "xcpModelType" : "",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "i_folder_id",
        "type" : "array"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "i_sharing_parent",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_fetchcontentformats_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_fetchcontentformats_initiate_staless_ds"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_fetchcontentformats_initiate"
      },
      "xcpModelType" : "xcp_fetchcontentformats",
      "fields" : [ {
        "name" : "format_description",
        "type" : "string"
      }, {
        "name" : "format_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_fetchcontentformats_initiate_staless_ds_inputs_processVariables",
    {
      "extend" : "xcp.data.Model",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "dos_extension",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_fetchcontentformats_initiate_staless_ds_inputs",
    {
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "extraParams" : {
          "type" : "stateless"
        },
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_fetchcontentformats_initiate_staless_dss"
      },
      "xcpModelType" : "xcp_fetchcontentformats",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_fetchcontentformats_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_cabinet_query_outputs",
    {
      "extend" : "xcp.data.DqlDataSourceModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_cabinet_query"
        },
        "type" : "xcp_rest",
        "url" : ""
      },
      "xcpModelType" : "xcp_cabinet_query",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "r_creator_name",
        "type" : "string"
      }, {
        "name" : "r_creation_date",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_ds_read_rootsharedcontent_outputs",
    {
      "extend" : "xcp_ds_read_dm_document_outputs",
      "proxy" : {
        "reader" : {
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_ds_read_rootsharedcontent"
        },
        "type" : "xcp_rest",
        "url" : "pplication/xcp_rootsharedcontents"
      },
      "xcpModelType" : "xcp_rootsharedcontent",
      "fields" : [ {
        "name" : "i_sharing_type",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_queue_list_initiate_staless_ds"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_queue_list_initiate"
      },
      "xcpModelType" : "xcp_queue_list",
      "fields" : [ {
        "name" : "queuelist",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_queue_list_initiate_staless_ds_inputs",
    {
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "extraParams" : {
          "type" : "stateless"
        },
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_queue_list_initiate_staless_dss"
      },
      "xcpModelType" : "xcp_queue_list",
      "fields" : [ ]
    }
);

Ext.define("xcp_viewer_profiles_outputs",
    {
      "extend" : "xcp.data.ViewerProfileModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_viewer_profiles"
        },
        "type" : "xcp_rest",
        "url" : ""
      },
      "xcpModelType" : "xcp_repository",
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "object_name",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_fetch_userorgroup_contain_filter_initiate_staless_ds_outputs",
    {
      "extend" : "xcp.data.StatelessProcessCollectionModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_fetch_userorgroup_contain_filter_initiate_staless_ds"
        },
        "type" : "xcp_rest",
        "url" : "application/processes/xcp_fetch_userorgroup_contain_filter_initiate"
      },
      "xcpModelType" : "xcp_fetch_userorgroup_contain_filter",
      "fields" : [ {
        "name" : "user_group_name",
        "type" : "string"
      }, {
        "name" : "id",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_fetch_userorgroup_contain_filter_initiate_staless_ds_inputs_processVariables",
    {
      "extend" : "xcp.data.Model",
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "contain_filter",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_fetch_userorgroup_contain_filter_initiate_staless_ds_inputs",
    {
      "extend" : "xcp.data.StatelessProcessObjectModel",
      "proxy" : {
        "extraParams" : {
          "type" : "stateless"
        },
        "writer" : {
          "type" : "xcpjson"
        },
        "type" : "xcp_rest",
        "url" : "application/xcp_fetch_userorgroup_contain_filter_initiate_staless_dss"
      },
      "xcpModelType" : "xcp_fetch_userorgroup_contain_filter",
      "fields" : [ {
        "name" : "processVariables",
        "type" : "xcp_fetch_userorgroup_contain_filter_initiate_staless_ds_inputs_processVariables"
      } ]
    }
);

Ext.define("xcp_content_rt_query_outputs",
    {
      "extend" : "xcp.data.RealTimeDataSourceModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "extraParams" : {
          "type" : "xcp_content_rt_query"
        },
        "type" : "xcp_rest",
        "url" : "application/dm_documents"
      },
      "xcpModelType" : "xcp_content_rt_query",
      "fields" : [ {
        "name" : "object_name",
        "type" : "string"
      }, {
        "name" : "a_content_type",
        "type" : "string"
      }, {
        "name" : "r_modify_date",
        "type" : "string"
      }, {
        "name" : "r_modifier",
        "type" : "string"
      }, {
        "name" : "r_lock_date",
        "type" : "string"
      }, {
        "name" : "r_lock_owner",
        "type" : "string"
      }, {
        "name" : "r_version_label",
        "type" : "array"
      }, {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "r_object_type",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp_default_create_fold",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "folder_types",
        "type" : "array"
      }, {
        "name" : "default_folder_type",
        "type" : "string"
      }, {
        "name" : "default_folder_path",
        "type" : "string"
      }, {
        "name" : "parent_folder_id",
        "type" : "string"
      } ],
      "xcpModelType" : null
    }
);

Ext.define("xcp_def_inv_af",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "r_object_type",
        "type" : "array"
      }, {
        "name" : "r_object_id",
        "type" : "array"
      }, {
        "name" : "object_name",
        "type" : "array"
      } ],
      "xcpModelType" : null
    }
);

Ext.define("xcp_def_imp_af",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "content_types",
        "type" : "array"
      }, {
        "name" : "default_content_type",
        "type" : "string"
      }, {
        "name" : "content_formats",
        "type" : "array"
      }, {
        "name" : "default_content_format",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ],
      "xcpModelType" : null
    }
);

Ext.define("xcp_selector_content",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ ],
      "xcpModelType" : null
    }
);

Ext.define("xcp_def_lw_imp_af",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "content_types",
        "type" : "array"
      }, {
        "name" : "default_content_type",
        "type" : "string"
      }, {
        "name" : "content_formats",
        "type" : "array"
      }, {
        "name" : "default_content_format",
        "type" : "string"
      }, {
        "name" : "shared_parent_id",
        "type" : "string"
      } ],
      "xcpModelType" : null
    }
);

Ext.define("xcp_selector_folder",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ ],
      "xcpModelType" : null
    }
);

Ext.define("xcp_attachment_sel",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "folderRoot",
        "type" : "string"
      } ],
      "xcpModelType" : null
    }
);

Ext.define("xcp_default_create_docu",
    {
      "extend" : "xcp.data.Model",
      "fields" : [ {
        "name" : "content_types",
        "type" : "array"
      }, {
        "name" : "default_content_type",
        "type" : "string"
      }, {
        "name" : "content_formats",
        "type" : "array"
      }, {
        "name" : "default_content_format",
        "type" : "string"
      }, {
        "name" : "folder_id",
        "type" : "string"
      } ],
      "xcpModelType" : null
    }
);

Ext.define("roles",
    {
      "extend" : "xcp.data.RoleModel",
      "proxy" : {
        "reader" : {
          "rootProperty" : "items",
          "type" : "xcpjson"
        },
        "type" : "rest",
        "url" : "application/roles"
      },
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "label",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "namespace",
        "type" : "string"
      } ]
    }
);

Ext.define("role",
    {
      "extend" : "xcp.data.RoleModel",
      "proxy" : {
        "reader" : {
          "type" : "json"
        },
        "type" : "rest",
        "url" : "application/role"
      },
      "xcpModelType" : null,
      "fields" : [ {
        "name" : "id",
        "type" : "string"
      }, {
        "name" : "name",
        "type" : "string"
      }, {
        "name" : "label",
        "type" : "string"
      }, {
        "name" : "description",
        "type" : "string"
      }, {
        "name" : "namespace",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp.data.model.UserPreferences",
    {
      "extend" : "xcp.data.PreferencesModel",
      "proxy" : {
        "extraParams" : {
          "fields" : "workflowAutoNextTask,role,delegate_task,delegateToUser,networkLocation"
        },
        "type" : "xcp_rest",
        "url" : "application/currentUser/preferences"
      },
      "xcpModelType" : "xcp_preference",
      "fields" : [ {
        "mapping" : "workflowautonexttask",
        "name" : "workflowAutoNextTask",
        "type" : "string"
      }, {
        "mapping" : "role",
        "name" : "role",
        "type" : "string"
      }, {
        "mapping" : "delegate_task",
        "name" : "delegate_task",
        "type" : "string"
      }, {
        "mapping" : "delegatetouser",
        "name" : "delegateToUser",
        "type" : "string"
      }, {
        "mapping" : "networklocation",
        "name" : "networkLocation",
        "type" : "string"
      } ]
    }
);

Ext.define("xcp.data.model.SessionVariableModel",
    {
      "extend" : "xcp.data.Model",
      "persistentFields" : [ ],
      "proxy" : null,
      "xcpModelType" : null,
      "fields" : [ ]
    }
);
