// RFC 6570: URI Templates
// Example using https://github.com/geraintluff/uri-templates

// we use HAL
var api_response = {
    "_links": {
        "image": {
            "href": "https://fastly.hautelookcdn.com/assets/132746vincewc/event-main.jpg{?width,height}",
            "templated":  true
        }
    }
};

var template = new UriTemplate(api_response["_links"]["image"]["href"]);

var image_url = template.fill({width: 200, height: 133});

console.log(image_url);

