// RFC 6570: URI Templates
// using https://github.com/geraintluff/uri-templates

var api_response = {
    "image_template": "http://www.fastly.io/image.jpg{?width,height}"
};

var template = new UriTemplate(api_response["image_template"]);

var image_url = template.fill({width: 200, height: 133});

console.log(image_url);

// we use HAL
var api_response = {
    "_links": [
        "image": {
            "href": "http://www.fastly.io/image.jpg{?width,height}",
            "templated":  true
        }
    ]
};
