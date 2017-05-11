Accelerator Bootcamp
==

### Sample server response
```json
{ 
	"title": "title here",
	"slides": [
			{ // slide object
				"title": "title here"
				"slide_type": "title|simple|two-column",
				"content": ["content 1", "content 2", "..."]
			}
	]
}
```

* The top level response will be a __slideshow__.
* A __slideshow__ has many __slides__.

#### Slide Types
Slides can be one of three string types:
* "title"
* "simple"
* "two-column"

### API
* Endpoint: [/api/v1/](#)
* Slideshows: [/api/v1/slideshows/:id/slides/:index](#)
