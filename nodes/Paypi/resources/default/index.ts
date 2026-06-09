import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "POST Check Code",
					"value": "POST Check Code",
					"action": "Check verification code",
					"description": "Checks the user's emailed code is valid. \nIf this returns success=true, you can safely assume the user you are interacting with is the owner of that email address.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/checkCode"
						}
					}
				},
				{
					"name": "POST Send Code",
					"value": "POST Send Code",
					"action": "Send verification code",
					"description": "This request send's a code to the given email address, which should be returned to check it is correct.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sendCode"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /checkCode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Check Code"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"type": "string",
			"default": 123456,
			"routing": {
				"send": {
					"property": "code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Check Code"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "test@test.com",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Check Code"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for bearerAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Check Code"
					]
				}
			}
		},
		{
			"displayName": "POST /sendCode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Code"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Code"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for bearerAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Send Code"
					]
				}
			}
		},
];
