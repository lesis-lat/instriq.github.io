var host="lesis.lat"

if (window.location.host == host && window.location.protocol != "https:") {
    window.location.protocol = "https:"
}