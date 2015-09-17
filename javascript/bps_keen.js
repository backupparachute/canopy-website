function keen_obj() {
  return {
 "user_agent" : "${keen.user_agent}",
 "ip_address" : "${keen.ip}",
 "page_url" : window.location.href,
 "keen" : {
  "addons" : [
    {
      "name" : "keen:ua_parser",
      "input" : {
        "ua_string" : "user_agent"
      },
      "output" : "parsed_user_agent"
    },
    {
      "name" : "keen:ip_to_geo",
      "input" : {
        "ip" : "ip_address"
      },
      "output" : "ip_geo_info"
    },
    {
      "name" : "keen:url_parser",
      "input" : {
        "url" : "page_url"
      },
      "output" : "parsed_page_url"
    }
  ]
 }
  };
}
