function closeGreeting() {
    document.getElementById('greeting').style.display = 'none';
    document.getElementById('mainSite').classList.add('active');
}

function makeApiRequest() {
    const cookie = document.getElementById('input-cookie').value;
    const postLink = document.getElementById('input-post-link').value;
    const reactionType = document.getElementById('input-reaction-type').value;

    fetch(`https://flikers.net/android/android_get_react.php?link=${encodeURIComponent(postLink)}&type=${encodeURIComponent(reactionType)}&cookie=${encodeURIComponent(cookie)}`, {
        method: 'POST',
        headers: {
            'User-Agent': "Dalvik/2.1.0 (Linux; U; Android 12; V2134 Build/SP1A.210812.003)",
            'Connection': "Keep-Alive",
            'Accept-Encoding': "gzip",
            'Content-Type': "application/json",
            'Cookie': cookie
        },
        body: JSON.stringify({
            post_id: postLink,
            react_type: reactionType,
            version: "v1.7"
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        alert(JSON.stringify(data, null, 2));
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error occurred. Please check console.');
    });
}