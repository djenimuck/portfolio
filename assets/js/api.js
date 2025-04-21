
async function fetchProfileData() {
    const url = 'https://djenimuck.github.io/portfolio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}

