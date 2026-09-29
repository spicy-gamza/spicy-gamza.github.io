function FindProxyForURL(url, host) {
    if (host === "127.0.0.1" || host === "localhost") return "DIRECT";
    
    // dalong
    if (dnsDomainIs(host, "dalong.net") || shExpMatch(host, "*.dalong.com")) {
        return "PROXY 127.0.0.1:8050";
    }


    // ChatGPT Web
    if (dnsDomainIs(host, "chatgpt.com") || shExpMatch(host, "*.chatgpt.com")) {
        return "PROXY 127.0.0.1:8050";
    }

    // OpenAI API
    if (dnsDomainIs(host, "openai.com")) {
        return "PROXY 127.0.0.1:8050";
    }


    // 그 외는 직접 연결
    return "DIRECT";
}
