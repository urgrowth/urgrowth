<script setup>
definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();

const res = await $fetch("/api/getUser", {
  body: {
    id: user.value?.id,
    email: user.value?.email,
  },
  method: "POST",
});

const userData = JSON.parse(res?.body ?? {});
const newData = reactive({
  full_name: userData?.full_name,
  handle: userData?.handle,
  skills: userData?.skills,
  interests: userData?.interests,
  bio: userData?.bio,
  introduction: userData?.introduction,
  location: userData?.location
});

if (res?.status !== 200) {
  alert("Something went wrong");
  navigateTo("/");
}
const location = ["", "Thailand", "United States", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong (China)", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau (China)", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States minor outlying islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"]

function submit(e) {
  e.preventDefault();

  $fetch("/api/updateUser", {
    body: {
      id: user.value?.id,
      email: user.value?.email,
      full_name: newData.full_name,
      handle: newData.handle,
      skills: newData.skills,
      interests: newData.interests,
      bio: newData.bio,
      introduction: newData.introduction,
      location: newData.location
    },
    method: "POST",
  }).then((res) => {
    if (res.status === 200) {
      alert("Profile updated!");
      return navigateTo("/profile");
    } else {
      alert(res.body.toString());
    }
  });
}
</script>

<template>
  <form @submit.prevent="submit">
    <div class="flex flex-col gap-4 px-4 py-2 md:px-12 md:py-6">
      <div class="page-container">
        <div class="profile-container">
          <img
            :src="userData?.avatarURL"
            alt="avatar"
            class="icon"
            @click="navigateTo('https://gravatar.com/profile/avatars', { external: true, open: { target: '_blank' } })"
          />
          <div class="input-container">
            <span class="label-text">Full name</span>
            <input
              class="full_name input input-bordered"
              name="full_name"
              v-model="newData.full_name"
              placeholder="John Smith"
              maxlength="64"
            />
            <span class="label-text-alt"
              >{{ 64 - newData.full_name?.length }} characters left</span
            >
          </div>
          <div class="grid md:grid-cols-2 grid-cols-1 gap-2">
            <div class="input-container">
              <span class="label-text">Handle (username)</span>
              <input
                class="handle input input-bordered input-sm"
                name="handle"
                v-model="newData.handle"
                placeholder="j.smith1991"
                maxlength="32"
              />
              <span class="label-text-alt"
              >{{ 32 - newData.handle?.length }} characters left</span
              >
            </div>
            <div class="input-container">
              <span class="label-text">Location</span>
              <select
                class="input input-bordered input-sm"
                name="location"
                v-model="newData.location"
              >
                <option v-for="loc in location" :value="loc">{{ loc }}</option>
              </select>
            </div>
          </div>
          <div class="flex gap-2">
            <button class="btn btn-success">SAVE</button>
            <span class="btn btn-error" @click="navigateTo('/profile')">CANCEL</span>
          </div>
        </div>
        <div class="side-info-container">
          <div class="items-container">
            <h1>Skills</h1>
            <div class="items-wrapper">
              <div class="input-container w-full">
                <input
                  class="input input-bordered w-full"
                  name="skill"
                  :value="newData.skills"
                  @input="
                    (e) => {
                      newData.skills = e.target.value.split(',') || [];
                    }
                  "
                  placeholder="Web Development, Graphic Design, Audio Engineer..."
                  :maxlength="
                    newData.skills.length <= 5 ? 9999 : newData.skills.length
                  "
                />
                <span class="label-text-alt"
                  >{{ 5 - newData.skills.length }} tags left</span
                >
              </div>
            </div>
          </div>
          <div class="items-container">
            <h1>Interests</h1>
            <div class="items-wrapper">
              <div class="input-container w-full">
                <input
                  class="input input-bordered w-full"
                  name="interest"
                  :value="newData.interests"
                  @input="
                    (e) => {
                      newData.interests = e.target.value.split(',') || [];
                    }
                  "
                  placeholder="Gaming, Content Creation, Music Producing..."
                />
                <span class="label-text-alt"
                  >{{ 5 - newData.interests.length }} tags left</span
                >
              </div>
            </div>
          </div>
          <div class="items-container">
            <h1>Mission</h1>
            <input
              class="input input-bordered w-full"
              name="bio"
              placeholder="My mission is..."
              maxlength="256"
              v-model="newData.bio"
            />
            <span class="label-text-alt"
              >{{ 256 - newData.bio?.length }} characters left</span
            >
          </div>
        </div>
      </div>
      <div class="divider"><h1>INTRODUCTION</h1></div>
      <div class="introduction">
        <textarea
          class="input input-bordered h-[50vh] w-full"
          name="introduction"
          v-model="newData.introduction"
          placeholder="My goal is..."
          maxlength="2048"
        >
        </textarea>
        <span class="label-text-alt"
          >{{ 2048 - newData.introduction?.length }} characters left</span
        >
      </div>
      <div class="divider">
        <h1>CONNECTIONS</h1>
        <!-- Let's just hope we have another backend developer -->
      </div>
    </div>
  </form>
</template>

<style scoped>
h1,
.profile-container input {
  @apply text-2xl font-bold;
}

input {
  @apply text-center;
}

.page-container {
  @apply grid w-full grid-cols-1 md:grid-cols-2;
}

.profile-container {
  @apply flex flex-col items-center justify-center gap-2;
  animation: gradient 5s ease-in-out infinite;
  background-size: 400% 400%;
}

.profile-container .icon {
  @apply rounded-full;
  height: 128px;
  width: 128px;
}

.profile-container .full_name {
  @apply text-3xl font-bold;
}

.profile-container .handle {
  @apply text-xl text-neutral-400;
}

.side-info-container {
  @apply flex flex-col gap-4;
}

.side-info-container .items-container {
  @apply flex flex-col gap-2;
}

.side-info-container .items-wrapper {
  @apply flex flex-row gap-2;
}

.introduction p {
  @apply text-sm;
}

.input-container {
  @apply flex flex-col gap-0;
}
</style>
