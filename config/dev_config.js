{
	"locales": [{
		"locale": "en_US",
		"sameas": ["en", "en_EN", "en_US", "en_UK"],
		"default": true
	}],
	"fixtures": [
		{
			"path": "^\/api",
			"proxy": {
				"host": "api.over-blog.dev",
				"port": 80,
				"replace_url": "^\/api(/.*?)$"
			}
		}
	],
	"port": 1636
}
