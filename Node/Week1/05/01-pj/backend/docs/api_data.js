define({ "api": [
  {
    "type": "post",
    "url": "/member/register",
    "title": "用户注册接口",
    "name": "register",
    "group": "用户管理",
    "version": "0.1.0",
    "description": "<p>完成用户注册操作</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repassword",
            "description": "<p>确认密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "markup",
            "description": "<p>个人简介</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "success-200": [
          {
            "group": "success-200",
            "type": "String",
            "optional": false,
            "field": "error_code",
            "description": "<p>响应状态码</p>"
          },
          {
            "group": "success-200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "success-200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>返回数据，成功的时候才存在</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.data",
            "description": "<p>数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功注册-示例:",
          "content": "成功注册\nHTTP/1.1 200 OK\n{\n code:0,\n msg:'success',\n data:{}\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "failure-500": [
          {
            "group": "failure-500",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>响应状态码</p>"
          },
          {
            "group": "failure-500",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-示例:",
          "content": "这是出现错误时返回结果示例\nHTTP/1.1 404 Not Found\n{\n code:1,\n msg:'not found',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "router/api/member.js",
    "groupTitle": "用户管理",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/v1/member/register"
      }
    ]
  }
] });
