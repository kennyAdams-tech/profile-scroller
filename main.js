// DATA
const data = [
    {
        name: 'Adams kenny',
        age: 35,
        gender: 'male',
        lookingFor: 'female',
        location: 'Lagos Nigeria',
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    },
    {
        name: 'ALexa Bliss',
        age: 28,
        gender: 'female',
        lookingFor: 'male',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'John Doe',
        age: 33,
        gender: 'male',
        lookingFor: 'female',
        location: 'Miami Fl',
        image: 'https://randomuser.me/api/portraits/men/50.jpg'
    }
];

const profiles = profileIterator(data)

// call the nextprofile function
nextProfiles()


// Event lister - next
document.getElementById('next').addEventListener('click', nextProfiles)

//nextprofiles
function nextProfiles() {
    const currentProfile = profiles.next().value

    if (currentProfile !== undefined) {
            // Image display
        document.getElementById('img-display').innerHTML = `
        <img src="${currentProfile.image}">
        `
        // Profile display
        document.getElementById('profile-display').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
        </ul>
        `
    } else {
        window.location.reload()
    }
    
}

// profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ? 
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    }
}














