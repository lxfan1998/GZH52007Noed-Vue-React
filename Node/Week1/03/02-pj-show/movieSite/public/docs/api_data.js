define({ "api": [
  {
    "type": "get",
    "url": "/member/commentList",
    "title": "评论列表接口",
    "name": "commentList",
    "group": "会员管理接口",
    "version": "0.1.0",
    "description": "<p>Xxx公司的电影评论列表接口，用于返回电影的列表信息，实现了分页，查询相关的功能。</p>",
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
            "field": "token",
            "description": "<p>用户登录标识，必须</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码，默认值为 1， 非必须</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页显示的数量，默认值为 2，非必须</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movieId",
            "description": "<p>电影的主键id</p>"
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
            "description": "<p>响应英文描述</p>"
          },
          {
            "group": "success-200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>响应中文描述</p>"
          },
          {
            "group": "success-200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>响应结果状态</p>"
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
            "type": "int",
            "optional": false,
            "field": "result.total",
            "description": "<p>记录总数</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.size",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.currentPage",
            "description": "<p>当前页</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.totalPage",
            "description": "<p>总页数</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.commentList",
            "description": "<p>电影评论列表</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.commentList.content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.commentList.memberInfo",
            "description": "<p>评论人信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功注册-示例:",
          "content": "评论注册\nHTTP/1.1 200 OK\n {\n    \"error_code\": 0,\n    \"msg\": \"success\",\n    \"reason\": \"成功请求\",\n    \"status\": true,\n    \"result\": {\n        \"total\": 3,\n        \"size\": 2,\n        \"currentPage\": 1,\n        \"totalPage\": 2,\n        \"commentList\": [\n            {\n                \"_id\": \"5deb753f31632a19bcf4d55d\",\n                \"userId\": \"5deb641048984927b82c25f1\",\n                \"movieId\": \"5de60a6469bef210e48c783c\",\n                \"content\": \"电影非常的不错，值得观看！\",\n                \"createdAt\": \"2019-12-07T09:47:43.069Z\",\n                \"updatedAt\": \"2019-12-07T09:47:43.069Z\",\n                \"__v\": 0,\n                \"memberInfo\": {\n                    \"username\": \"liyang\",\n                    \"avatar\": \"http://localhost:9090/images/default.jpg\"\n                }\n            },\n            {\n                \"_id\": \"5deb755b31632a19bcf4d55e\",\n                \"userId\": \"5deb641048984927b82c25f1\",\n                \"movieId\": \"5de60a6469bef210e48c783c\",\n                \"content\": \"电影非常的不错电影非常的不错电影非常的不错电影非常的不错电影非常的不错，值得观看！\",\n                \"createdAt\": \"2019-12-07T09:48:11.491Z\",\n                \"updatedAt\": \"2019-12-07T09:48:11.491Z\",\n                \"__v\": 0,\n                \"memberInfo\": {\n                    \"username\": \"liyang\",\n                    \"avatar\": \"http://localhost:9090/images/default.jpg\"\n                }\n            }\n        ]\n    }\n}",
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
          "content": " 评论失败\n {\n    \"error_code\": 1,\n    \"msg\": \"failure\",\n    \"reason\": \"获取失败\",\n    \"status\": false,\n    \"error\": \"缺少 movieId ！\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api/MemberController.js",
    "groupTitle": "会员管理接口",
    "sampleRequest": [
      {
        "url": "https://h5.woaikaifa.com/api/v1/member/commentList"
      }
    ]
  },
  {
    "type": "post",
    "url": "/member/favList",
    "title": "收藏列表接口",
    "name": "favList",
    "group": "会员管理接口",
    "version": "0.1.0",
    "description": "<p>Xxx公司的用户收藏列表接口，用于返回电影的列表信息，实现了分页，查询相关的功能。</p>",
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
            "field": "token",
            "description": "<p>用户登录标识，必须</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码，默认值为 1， 非必须</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页显示的数量，默认值为 2，非必须</p>"
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
            "description": "<p>响应英文描述</p>"
          },
          {
            "group": "success-200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>响应中文描述</p>"
          },
          {
            "group": "success-200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>响应结果状态</p>"
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
            "type": "int",
            "optional": false,
            "field": "result.total",
            "description": "<p>记录总数</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.size",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.currentPage",
            "description": "<p>当前页</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.totalPage",
            "description": "<p>总页数</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.FavList",
            "description": "<p>电影评论列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功注册-示例:",
          "content": "评论注册\nHTTP/1.1 200 OK",
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
          "content": " 评论失败\n {\n    \"error_code\": 1,\n    \"msg\": \"failure\",\n    \"reason\": \"获取失败\",\n    \"status\": false,\n    \"error\": \"缺少 movieId ！\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api/MemberController.js",
    "groupTitle": "会员管理接口",
    "sampleRequest": [
      {
        "url": "https://h5.woaikaifa.com/api/v1/member/favList"
      }
    ]
  },
  {
    "type": "post",
    "url": "/member/favRemove",
    "title": "收藏删除接口",
    "name": "favRemove",
    "group": "会员管理接口",
    "version": "0.1.0",
    "description": "<p>Xxx公司的用户收藏删除接口；</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>用户登录标识，必须</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "favId",
            "description": "<p>收藏的主键id</p>"
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
            "description": "<p>响应英文描述</p>"
          },
          {
            "group": "success-200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>响应中文描述</p>"
          },
          {
            "group": "success-200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>响应结果状态</p>"
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
            "type": "int",
            "optional": false,
            "field": "result.favInfo",
            "description": "<p>已删除的记录</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-示例:",
          "content": "删除成功\nHTTP/1.1 200 OK\n {\n    \"error_code\": 0,\n    \"msg\": \"success\",\n    \"reason\": \"删除成功\",\n    \"status\": true,\n    \"result\": {\n        \"favInfo\": {\n            \"_id\": \"5deb709f504e841e381e9a1d\",\n            \"userId\": \"5deb641048984927b82c25f1\",\n            \"movieId\": \"5de5de286c597200d4803739\",\n            \"createdAt\": \"2019-12-07T09:27:59.128Z\",\n            \"updatedAt\": \"2019-12-07T09:27:59.128Z\",\n            \"__v\": 0\n        }\n    }\n}",
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
          "content": " 删除失败\n {\n    \"error_code\": 1,\n    \"msg\": \"failure\",\n    \"reason\": \"删除失败\",\n    \"status\": false,\n    \"error\": \"删除失败！CastError: Cast to ObjectId failed for value \\\"5deb709f504es841e381e9a1d\\\" at path \\\"_id\\\" for model \\\"FavModel\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api/MemberController.js",
    "groupTitle": "会员管理接口",
    "sampleRequest": [
      {
        "url": "https://h5.woaikaifa.com/api/v1/member/favRemove"
      }
    ]
  },
  {
    "type": "post",
    "url": "/member/commentAdd",
    "title": "评论添加接口",
    "name": "memberCommentAdd",
    "group": "会员管理接口",
    "version": "0.1.0",
    "description": "<p>Xxx公司的电影评论接口。</p>",
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
            "field": "movieId",
            "description": "<p>待电影的主键id，必须</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录的令牌，必须</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容，必须</p>"
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
            "description": "<p>响应英文描述</p>"
          },
          {
            "group": "success-200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>响应中文描述</p>"
          },
          {
            "group": "success-200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>响应结果状态</p>"
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
            "field": "result.commentInfo",
            "description": "<p>评论信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "评论成功-示例:",
          "content": "评论成功\nHTTP/1.1 200 OK\n {\n    \"error_code\": 0,\n    \"msg\": \"success\",\n    \"reason\": \"评论成功\",\n    \"status\": true,\n    \"result\": {\n        \"commentInfo\": {\n            \"_id\": \"5deb755b31632a19bcf4d55e\",\n            \"userId\": \"5deb641048984927b82c25f1\",\n            \"movieId\": \"5de60a6469bef210e48c783c\",\n            \"content\": \"电影非常的不错电影非常的不错电影非常的不错电影非常的不错电影非常的不错，值得观看！\",\n            \"createdAt\": \"2019-12-07T09:48:11.491Z\",\n            \"updatedAt\": \"2019-12-07T09:48:11.491Z\",\n            \"__v\": 0\n        }\n    }\n}",
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
          "content": " 评论失败\n {\n    \"error_code\": 1,\n    \"msg\": \"failure\",\n    \"reason\": \"评论失败\",\n    \"status\": false,\n    \"error\": \"评论内容不能为空！\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api/MemberController.js",
    "groupTitle": "会员管理接口",
    "sampleRequest": [
      {
        "url": "https://h5.woaikaifa.com/api/v1/member/commentAdd"
      }
    ]
  },
  {
    "type": "post",
    "url": "/member/favAdd",
    "title": "收藏增加接口",
    "name": "memberFavAdd",
    "group": "会员管理接口",
    "version": "0.1.0",
    "description": "<p>Xxx公司的电影收藏接口。</p>",
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
            "field": "movieId",
            "description": "<p>待收藏的电影主键id，必须</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录的令牌，必须</p>"
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
            "description": "<p>响应英文描述</p>"
          },
          {
            "group": "success-200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>响应中文描述</p>"
          },
          {
            "group": "success-200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>响应结果状态</p>"
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
            "field": "result.movieInfo",
            "description": "<p>收藏的电影信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "收藏成功-示例:",
          "content": "收藏成功\nHTTP/1.1 200 OK\n {\n    \"error_code\": 0,\n    \"msg\": \"success\",\n    \"reason\": \"收藏成功\",\n    \"status\": true,\n    \"result\": {\n        \"movieInfo\": {\n            \"_id\": \"5deb724e8233d620c4c74c7b\",\n            \"userId\": \"5deb641048984927b82c25f1\",\n            \"movieId\": \"5de60a6469bef210e48c783c\",\n            \"createdAt\": \"2019-12-07T09:35:10.896Z\",\n            \"updatedAt\": \"2019-12-07T09:35:10.896Z\",\n            \"__v\": 0\n        }\n    }\n}",
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
          "content": " 收藏失败\n {\n    \"error_code\": 1,\n    \"msg\": \"failure\",\n    \"reason\": \"验证不通过\",\n    \"status\": false,\n    \"error\": \"收藏失败！JsonWebTokenError: invalid token\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api/MemberController.js",
    "groupTitle": "会员管理接口",
    "sampleRequest": [
      {
        "url": "https://h5.woaikaifa.com/api/v1/member/favAdd"
      }
    ]
  },
  {
    "type": "post",
    "url": "/member/login",
    "title": "会员登录接口",
    "name": "memberLogin",
    "group": "会员管理接口",
    "version": "0.1.0",
    "description": "<p>Xxx公司的会员登录接口。</p>",
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
            "description": "<p>用户名，必须</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码，必须</p>"
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
            "description": "<p>响应英文描述</p>"
          },
          {
            "group": "success-200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>响应中文描述</p>"
          },
          {
            "group": "success-200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>响应结果状态</p>"
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
            "field": "result.token",
            "description": "<p>登录标识</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功登录-示例:",
          "content": "成功注册\nHTTP/1.1 200 OK",
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
          "content": " 这是用户名重复出现错误时返回结果示例\n {\n    \"error_code\": 1,\n    \"msg\": \"failure\",\n    \"reason\": \"验证不通过\",\n    \"status\": false,\n    \"error\": \"账户错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api/MemberController.js",
    "groupTitle": "会员管理接口",
    "sampleRequest": [
      {
        "url": "https://h5.woaikaifa.com/api/v1/member/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/member/register",
    "title": "会员注册接口",
    "name": "memberRegister",
    "group": "会员管理接口",
    "version": "0.1.0",
    "description": "<p>Xxx公司的会员注册接口。</p>",
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
            "description": "<p>用户名，必须</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码，必须</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repassword",
            "description": "<p>确认密码，必须</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "markup",
            "description": "<p>个人简介，非必须</p>"
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
            "description": "<p>响应英文描述</p>"
          },
          {
            "group": "success-200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>响应中文描述</p>"
          },
          {
            "group": "success-200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>响应结果状态</p>"
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
            "type": "int",
            "optional": false,
            "field": "result.userInfo",
            "description": "<p>记录总数</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.userInfo.avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.userInfo.username",
            "description": "<p>名称</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.userInfo.markup",
            "description": "<p>简介</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.userInfo._id",
            "description": "<p>主键id</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.userInfo.token",
            "description": "<p>登录标识</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功注册-示例:",
          "content": "成功注册\nHTTP/1.1 200 OK",
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
          "content": " 这是用户名重复出现错误时返回结果示例\n {\n    \"error_code\": 1,\n    \"msg\": \"failure\",\n    \"reason\": \"验证不通过\",\n    \"status\": false,\n    \"error\": \"用户信息已存在！\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api/MemberController.js",
    "groupTitle": "会员管理接口",
    "sampleRequest": [
      {
        "url": "https://h5.woaikaifa.com/api/v1/member/register"
      }
    ]
  },
  {
    "type": "post",
    "url": "/member/pvAdd",
    "title": "pv增加接口",
    "name": "pvAdd",
    "group": "会员管理接口",
    "version": "0.1.0",
    "description": "<p>Xxx公司的增加电影阅读量的接口！</p>",
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
            "field": "token",
            "description": "<p>用户登录标识，必须</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movieId",
            "description": "<p>电影ID，必须</p>"
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
            "description": "<p>响应英文描述</p>"
          },
          {
            "group": "success-200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>响应中文描述</p>"
          },
          {
            "group": "success-200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>响应结果状态</p>"
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
            "type": "int",
            "optional": false,
            "field": "result.movieInfo",
            "description": "<p>记录总数</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieInfo.pv",
            "description": "<p>最新pv值</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieInfo.movieId",
            "description": "<p>电影id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功注册-示例:",
          "content": "评论注册\nHTTP/1.1 200 OK\n {\n    \"error_code\": 0,\n    \"msg\": \"success\",\n    \"reason\": \"处理成功\",\n    \"status\": true,\n    \"result\": {\n        \"movieInfo\": {\n            \"pv\": 1235,\n            \"movieId\": \"5dec7149ecba3421207b1808\"\n        }\n    }\n}",
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
          "content": " 评论失败\n {\n    \"error_code\": 1,\n    \"msg\": \"failure\",\n    \"reason\": \"获取失败\",\n    \"status\": false,\n    \"error\": \"缺少 movieId ！\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api/MemberController.js",
    "groupTitle": "会员管理接口",
    "sampleRequest": [
      {
        "url": "https://h5.woaikaifa.com/api/v1/member/pvAdd"
      }
    ]
  },
  {
    "type": "get",
    "url": "/movie/category",
    "title": "电影分类接口",
    "name": "movieCategory",
    "group": "电影管理接口",
    "version": "0.1.0",
    "description": "<p>Xxx公司的电影分类接口，用于返回电影的分类信息;</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
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
            "description": "<p>响应英文描述</p>"
          },
          {
            "group": "success-200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>响应中文描述</p>"
          },
          {
            "group": "success-200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>响应结果状态</p>"
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
            "type": "int",
            "optional": false,
            "field": "result.categoryData",
            "description": "<p>记录信息</p>"
          },
          {
            "group": "success-200",
            "type": "int",
            "optional": false,
            "field": "result.categoryData._id",
            "description": "<p>主键id</p>"
          },
          {
            "group": "success-200",
            "type": "int",
            "optional": false,
            "field": "result.categoryData.cateName",
            "description": "<p>分类名称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功注册-示例:",
          "content": "成功注册\nHTTP/1.1 200 OK\n {\n    \"error_code\": 0,\n    \"msg\": \"success\",\n    \"reason\": \"成功请求\",\n    \"status\": true,\n    \"result\": {\n        \"categoryData\": [\n            {\n                \"_id\": \"5de5ca2609d84e1da0f474ca\",\n                \"cateName\": \"科幻\",\n                \"__v\": 0\n            },\n            {\n                \"_id\": \"5de5ca4b09d84e1da0f474cb\",\n                \"cateName\": \"动作\",\n                \"__v\": 0\n            },\n            {\n                \"_id\": \"5de5ca9709d84e1da0f474cc\",\n                \"cateName\": \"娱乐\",\n                \"__v\": 0\n            },\n            {\n                \"_id\": \"5de5dde06c597200d4803735\",\n                \"cateName\": \"恐怖\",\n                \"__v\": 0\n            },\n            {\n                \"_id\": \"5de704f97134a8144ca0681f\",\n                \"cateName\": \"悬疑\",\n                \"__v\": 0\n            },\n            {\n                \"_id\": \"5de77e0bdf78792348489cea\",\n                \"cateName\": \"悬疑社\",\n                \"__v\": 0\n            }\n        ]\n    }\n}",
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
    "filename": "controllers/api/MovieController.js",
    "groupTitle": "电影管理接口",
    "sampleRequest": [
      {
        "url": "https://h5.woaikaifa.com/api/v1/movie/category"
      }
    ]
  },
  {
    "type": "get",
    "url": "/movie/category/list",
    "title": "分类列表接口",
    "name": "movieCategoryList",
    "group": "电影管理接口",
    "version": "0.1.0",
    "description": "<p>根据分类的id，查询该分类下的电影的列表</p>",
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
            "field": "cateId",
            "description": "<p>电影分类的主键id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码，默认值为 1， 非必须</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页显示的数量，默认值为 2，非必须</p>"
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
            "description": "<p>响应英文描述</p>"
          },
          {
            "group": "success-200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>响应中文描述</p>"
          },
          {
            "group": "success-200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>响应结果状态</p>"
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
            "type": "int",
            "optional": false,
            "field": "result.total",
            "description": "<p>记录总数</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.size",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.currentPage",
            "description": "<p>当前页</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.totalPage",
            "description": "<p>总页数</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieList",
            "description": "<p>电影列表</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieList.movieName",
            "description": "<p>电影名称</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieList.actors",
            "description": "<p>演员</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieList.director",
            "description": "<p>电影导演</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功注册-示例:",
          "content": "成功注册",
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
          "content": " 这是出现错误时返回结果示例\n {\n    \"error_code\": 1,\n    \"msg\": \"cant found cateId\",\n    \"reason\": \"缺少电影分类cateId\",\n    \"status\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api/MovieController.js",
    "groupTitle": "电影管理接口",
    "sampleRequest": [
      {
        "url": "https://h5.woaikaifa.com/api/v1/movie/category/list"
      }
    ]
  },
  {
    "type": "get",
    "url": "/movie/detail",
    "title": "电影详情接口",
    "name": "movieDetail",
    "group": "电影管理接口",
    "version": "0.1.0",
    "description": "<p>Xxx公司的电影详情接口，用于返回电影的详细信息。</p>",
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
            "field": "movieId",
            "description": "<p>电影主键ID，必传</p>"
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
            "description": "<p>响应英文描述</p>"
          },
          {
            "group": "success-200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>响应中文描述</p>"
          },
          {
            "group": "success-200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>响应结果状态</p>"
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
            "type": "Object",
            "optional": false,
            "field": "result.movieInfo",
            "description": "<p>返回数据，成功的时候才存在</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieInfo.movieName",
            "description": "<p>电影名称</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieInfo.actors",
            "description": "<p>演员</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieInfo.director",
            "description": "<p>电影导演</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功注册-示例:",
          "content": "成功注册\nHTTP/1.1 200 OK\n {\n    \"error_code\": 0,\n    \"msg\": \"success\",\n    \"reason\": \"成功请求\",\n    \"status\": true,\n    \"result\": {\n        \"movieInfo\": {\n            \"_id\": \"5de5dc9b0303eb1a90be46e2\",\n            \"movieName\": \"肖申克的救赎\",\n            \"actors\": \" 蒂姆·罗宾斯 / 摩根·弗里曼 / 鲍勃·冈顿 / 威廉姆·赛德勒 / 克兰西·布朗\",\n            \"director\": \" 弗兰克·德拉邦特\",\n            \"cateId\": \"5de5ca4b09d84e1da0f474cb\",\n            \"movieImg\": \"http://localhost:9090/uploads/movieImg-1575357189862.jpg\",\n            \"descp\": \"20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯 Tim Robbins 饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在……\",\n            \"__v\": 0,\n            \"productionManager\": \"弗兰克·德拉邦特 / 斯蒂芬·金\",\n            \"movieViewCount\": 100\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "failure-400": [
          {
            "group": "failure-400",
            "type": "String",
            "optional": false,
            "field": "error_code",
            "description": "<p>响应状态码</p>"
          },
          {
            "group": "failure-400",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示英文信息</p>"
          },
          {
            "group": "failure-400",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>提示中文信息</p>"
          }
        ],
        "failure-500": [
          {
            "group": "failure-500",
            "type": "String",
            "optional": false,
            "field": "error_code",
            "description": "<p>响应状态码</p>"
          },
          {
            "group": "failure-500",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>提示英文信息</p>"
          },
          {
            "group": "failure-500",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>提示中文信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败1-示例:",
          "content": " 这是缺少 movieId 时候出现错误时返回结果示例\n {\n    \"error_code\": 1,\n    \"msg\": \"cant found movieId\",\n    \"reason\": \"缺少电影主键id\",\n    \"status\": false\n }\n\n*",
          "type": "json"
        },
        {
          "title": "失败2-示例:",
          "content": "这是 内部查询错误 结果示例\n    {\n       \"error_code\": 1,\n       \"msg\": \"failure\",\n       \"reason\": \"获取详情失败\",\n       \"status\": false,\n       \"error\": {\n           \"message\": \"Cast to ObjectId failed for value \\\"sdfds\\\" at path \\\"_id\\\" for model \\\"MovieModel\\\"\",\n           \"name\": \"CastError\",\n           \"stringValue\": \"\\\"sdfds\\\"\",\n           \"kind\": \"ObjectId\",\n           \"value\": \"sdfds\",\n           \"path\": \"_id\"\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api/MovieController.js",
    "groupTitle": "电影管理接口",
    "sampleRequest": [
      {
        "url": "https://h5.woaikaifa.com/api/v1/movie/detail"
      }
    ]
  },
  {
    "type": "get",
    "url": "/movie/hot",
    "title": "热门电影接口",
    "name": "movieHot",
    "group": "电影管理接口",
    "version": "0.1.0",
    "description": "<p>Xxx公司的热门电影接口。</p>",
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
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码，默认值为 1， 非必须</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页显示的数量，默认值为 2，非必须</p>"
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
            "description": "<p>响应英文描述</p>"
          },
          {
            "group": "success-200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>响应中文描述</p>"
          },
          {
            "group": "success-200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>响应结果状态</p>"
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
            "type": "int",
            "optional": false,
            "field": "result.total",
            "description": "<p>记录总数</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.size",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.currentPage",
            "description": "<p>当前页</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.totalPage",
            "description": "<p>总页数</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieList",
            "description": "<p>电影列表</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieList.movieName",
            "description": "<p>电影名称</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieList.actors",
            "description": "<p>演员</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieList.director",
            "description": "<p>电影导演</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功注册-示例:",
          "content": "成功\nHTTP/1.1 200 OK\n {\n    \"error_code\": 0,\n    \"msg\": \"success\",\n    \"reason\": \"成功请求\",\n    \"status\": true,\n    \"result\": {\n        \"total\": 2,\n        \"size\": 10,\n        \"currentPage\": 1,\n        \"totalPage\": 1,\n        \"movieList\": [\n            {\n                \"pv\": 1231,\n                \"isVip\": false,\n                \"_id\": \"5dec7171ecba3421207b1809\",\n                \"movieName\": \"手动阀\",\n                \"bianju\": \"手动阀\",\n                \"actors\": \"第三方\",\n                \"director\": \"水电费3\",\n                \"loadUrl\": \"http://localhost:9090/admin/index\",\n                \"secret\": \"21234\",\n                \"movieImg\": \"http://localhost:9090/uploads/movieImg-1575776625395.jpg\",\n                \"productionManager\": \"手动阀\",\n                \"isCharge\": \"不收费\",\n                \"createdAt\": \"2019-12-08 12:00:02\"\n            },\n            {\n                \"pv\": 1223,\n                \"isVip\": true,\n                \"_id\": \"5dec7149ecba3421207b1808\",\n                \"movieName\": \"最热电影\",\n                \"bianju\": \"最热电影\",\n                \"actors\": \"最热电影\",\n                \"director\": \"最热电影\",\n                \"loadUrl\": \"http://localhost:9090/admin/index\",\n                \"secret\": \"\",\n                \"movieImg\": \"http://localhost:9090/uploads/movieImg-1575776585548.jpg\",\n                \"productionManager\": \"最热电影\",\n                \"isCharge\": \"收费\",\n                \"createdAt\": \"2019-12-08 12:00:02\"\n            }\n        ]\n    }\n}",
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
          "content": "失败\nHTTP/1.1 404 Not Found\n{\n code:1,\n msg:'not found',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api/MovieController.js",
    "groupTitle": "电影管理接口",
    "sampleRequest": [
      {
        "url": "https://h5.woaikaifa.com/api/v1/movie/hot"
      }
    ]
  },
  {
    "type": "get",
    "url": "/movie/list",
    "title": "电影列表接口",
    "name": "movieList",
    "group": "电影管理接口",
    "version": "0.1.0",
    "description": "<p>Xxx公司的电影列表接口，用于返回电影的列表信息，实现了分页，查询相关的功能。</p>",
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
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码，默认值为 1， 非必须</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页显示的数量，默认值为 2，非必须</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "kw",
            "description": "<p>查询关键字，非必须</p>"
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
            "description": "<p>响应英文描述</p>"
          },
          {
            "group": "success-200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>响应中文描述</p>"
          },
          {
            "group": "success-200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>响应结果状态</p>"
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
            "type": "int",
            "optional": false,
            "field": "result.total",
            "description": "<p>记录总数</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.size",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.currentPage",
            "description": "<p>当前页</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.totalPage",
            "description": "<p>总页数</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieList",
            "description": "<p>电影列表</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieList.movieName",
            "description": "<p>电影名称</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieList.actors",
            "description": "<p>演员</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieList.director",
            "description": "<p>电影导演</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功注册-示例:",
          "content": "成功注册\nHTTP/1.1 200 OK\n {\n    \"error_code\": 0,\n    \"msg\": \"success\",\n    \"reason\": \"成功请求\",\n    \"status\": true,\n    \"result\": {\n        \"total\": 11,\n        \"size\": 2,\n        \"currentPage\": 1,\n        \"totalPage\": 6,\n        \"movieList\": [\n            {\n                \"_id\": \"5de5dc9b0303eb1a90be46e2\",\n                \"movieName\": \"肖申克的救赎\",\n                \"actors\": \" 蒂姆·罗宾斯 / 摩根·弗里曼 / 鲍勃·冈顿 / 威廉姆·赛德勒 / 克兰西·布朗\",\n                \"director\": \" 弗兰克·德拉邦特\",\n                \"movieImg\": \"http://localhost:9090/uploads/movieImg-1575357189862.jpg\",\n                \"productionManager\": \"弗兰克·德拉邦特 / 斯蒂芬·金\",\n                \"movieViewCount\": 100\n            },\n            {\n                \"_id\": \"5de5dda26c597200d4803733\",\n                \"movieName\": \"霸王别姬\",\n                \"actors\": \"张国荣 / 张丰毅 / 巩俐 / 葛优 / 英达 \",\n                \"director\": \"陈凯歌\",\n                \"movieImg\": \"http://localhost:9090/uploads/movieImg-1575357189862.jpg\",\n                \"productionManager\": \"芦苇 / 李碧华\",\n                \"movieViewCount\": 100\n            }\n        ]\n    }\n}",
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
    "filename": "controllers/api/MovieController.js",
    "groupTitle": "电影管理接口",
    "sampleRequest": [
      {
        "url": "https://h5.woaikaifa.com/api/v1/movie/list"
      }
    ]
  },
  {
    "type": "get",
    "url": "/movie/top",
    "title": "最新电影接口",
    "name": "movieTop",
    "group": "电影管理接口",
    "version": "0.1.0",
    "description": "<p>Xxx公司的最新电影接口。</p>",
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
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码，默认值为 1， 非必须</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页显示的数量，默认值为 2，非必须</p>"
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
            "description": "<p>响应英文描述</p>"
          },
          {
            "group": "success-200",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>响应中文描述</p>"
          },
          {
            "group": "success-200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>响应结果状态</p>"
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
            "type": "int",
            "optional": false,
            "field": "result.total",
            "description": "<p>记录总数</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.size",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.currentPage",
            "description": "<p>当前页</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.totalPage",
            "description": "<p>总页数</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieList",
            "description": "<p>电影列表</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieList.movieName",
            "description": "<p>电影名称</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieList.actors",
            "description": "<p>演员</p>"
          },
          {
            "group": "success-200",
            "type": "Object[]",
            "optional": false,
            "field": "result.movieList.director",
            "description": "<p>电影导演</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功注册-示例:",
          "content": "成功\nHTTP/1.1 200 OK\n {\n    \"error_code\": 0,\n    \"msg\": \"success\",\n    \"reason\": \"成功请求\",\n    \"status\": true,\n    \"result\": {\n        \"total\": 2,\n        \"size\": 10,\n        \"currentPage\": 1,\n        \"totalPage\": 1,\n        \"movieList\": [\n            {\n                \"pv\": 1231,\n                \"isVip\": false,\n                \"_id\": \"5dec7171ecba3421207b1809\",\n                \"movieName\": \"手动阀\",\n                \"bianju\": \"手动阀\",\n                \"actors\": \"第三方\",\n                \"director\": \"水电费3\",\n                \"loadUrl\": \"http://localhost:9090/admin/index\",\n                \"secret\": \"21234\",\n                \"movieImg\": \"http://localhost:9090/uploads/movieImg-1575776625395.jpg\",\n                \"productionManager\": \"手动阀\",\n                \"isCharge\": \"不收费\",\n                \"createdAt\": \"2019-12-08 11:59:51\"\n            },\n            {\n                \"pv\": 1223,\n                \"isVip\": true,\n                \"_id\": \"5dec7149ecba3421207b1808\",\n                \"movieName\": \"最热电影\",\n                \"bianju\": \"最热电影\",\n                \"actors\": \"最热电影\",\n                \"director\": \"最热电影\",\n                \"loadUrl\": \"http://localhost:9090/admin/index\",\n                \"secret\": \"\",\n                \"movieImg\": \"http://localhost:9090/uploads/movieImg-1575776585548.jpg\",\n                \"productionManager\": \"最热电影\",\n                \"isCharge\": \"收费\",\n                \"createdAt\": \"2019-12-08 11:59:51\"\n            }\n        ]\n    }\n}",
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
          "content": "失败\nHTTP/1.1 404 Not Found\n{\n code:1,\n msg:'not found',\n }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/api/MovieController.js",
    "groupTitle": "电影管理接口",
    "sampleRequest": [
      {
        "url": "https://h5.woaikaifa.com/api/v1/movie/top"
      }
    ]
  }
] });
