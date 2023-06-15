let datas = `[
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]
  `;
const data = JSON.parse(datas);
const container = document.querySelector('.container'),
  filter_search = document.querySelector('filter-search');

data.forEach(d => {
  let card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.setAttribute('data-filter', 'false');

  let job_info = document.createElement('div');
  job_info.setAttribute('class', 'job-info')
  let logo = document.createElement('div');
  logo.setAttribute('class', 'logo')
  logo.innerHTML = `<img src=${d.logo} alt="Logo" />`

  let job_description = document.createElement('div');
  job_description.setAttribute('class', 'job-description')

  let main_job_description = document.createElement('div');
  main_job_description.setAttribute('class', 'main-job-description')
  main_job_description.innerHTML =
    `<p class="job-company">${d.company}</p>`
  if (d.new) {
    main_job_description.innerHTML += `<p class="ifNew">NEW!</p>`
  }
  if (d.featured) {
    main_job_description.innerHTML += `<p class="ifFeatured">FEATURED</p>`
  }

  let title = document.createElement('div');
  title.setAttribute('class', 'title');
  title.innerHTML = `<p class="job-title"> ${d.position}</p>`

  let job_span = document.createElement('div');
  job_span.setAttribute('class', 'job-span');
  job_span.innerHTML =
    `
    <p class="ago">${d.postedAt}</p>
    <span>&#x2022;</span>
    <p class="job-time">${d.contract}</p>
    <span>&#x2022;</span>
    <p class="job-location">${d.location}</p>
    `;

  job_description.append(main_job_description, title, job_span);

  job_info.append(logo, job_description);

  let job_skill = document.createElement('div');
  job_skill.setAttribute('class', 'job-skill');
  let ul = document.createElement('ul');
  ul.innerHTML =
    `
  <li data-value="${d.role}">${d.role}</li>
  <li data-value="${d.level}">${d.level}</li>
  
  `
  d.languages.forEach(l => {
    let li = document.createElement('li');
    li.setAttribute('data-value', `${l}`);
    li.innerHTML = `${l}`
    ul.append(li);
  })

  d.tools.forEach(t => {
    let li = document.createElement('li');
    li.setAttribute('data-value', `${t}`)
    li.innerHTML = `${t}`
    ul.append(li);
  })

  job_skill.append(ul)
  card.append(job_info, job_skill)
  container.append(card)
})

const filter_li = document.querySelectorAll('.filter-search ul li'),
  filter_remove = document.querySelectorAll('.filter-search ul li img'),
  filter_container = document.querySelector('.filter');
const skill_li = document.querySelectorAll('.card .job-skill ul li'),
  clearBtn = document.querySelector('.clear-btn'),
  ourCard = document.querySelectorAll('.card');
let n = 0;

skill_li.forEach(skill => {
  skill.addEventListener('click', (e) => {
    n++;
    ourCard.forEach(crd => {
      crd.setAttribute('data-filter', 'false');
    })

    filter_container.setAttribute('style', 'display: flex')
    let search = e.target.getAttribute('data-value')
    filter_li.forEach(fil => {
      if (fil.classList.contains(`${search}`)) {
        fil.setAttribute('style', 'display: flex')
      }
    })

    skill_li.forEach(skills => {
      let val = skills.getAttribute('data-value');
      if (val == search) {
        let crd = skills.parentNode.parentNode.parentNode;
        crd.setAttribute('data-filter', 'true')
      }
    })

    cardFilterFunction();

  })
})

filter_remove.forEach(rem => {
  rem.addEventListener('click', (e) => {

    let remove_filter = e.target.parentNode.classList.value;
    let filter_li_btn = e.target.parentNode;
    filter_li_btn.setAttribute('style', 'display: none')

    skill_li.forEach(skills => {
      let val = skills.getAttribute('data-value');
      if (val != remove_filter) {
        let crd = skills.parentNode.parentNode.parentNode;
        crd.setAttribute('data-filter', 'true')
      }
    })

    cardFilterFunction()
    n--;
    if (n == 0) {
      filter_container.setAttribute('style', 'display: none')
    }
  })

})

clearBtn.addEventListener('click', () => {
  ourCard.forEach(crd => {
    crd.setAttribute('data-filter', 'true');
  })
  filter_li.forEach(fil => {
    fil.setAttribute('style', 'display: none')
  })
  filter_container.setAttribute('style', 'display: none')
  cardFilterFunction();
})

function cardFilterFunction() {
  ourCard.forEach(crd => {
    let crdFilter = crd.getAttribute('data-filter');
    if (crdFilter == 'true') {
      crd.setAttribute('style', 'display: flex')
    } else {
      crd.setAttribute('style', 'display: none')
    }
  })
}