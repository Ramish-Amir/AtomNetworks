const home_projects = [
    {
        project_name: "ATM 10",
        project_type: "Home",
        download: "10 MB",
        upload: "1 MB",
        price: "18.90 al mese",
        properties: [
            "Fino a 10 Mb in Download.",
            "Fino a 1 Mb in Upload."
        ]
    },
    {
        project_name: "ATM 100 R",
        project_type: "Home",
        download: "100 MB",
        upload: "20 MB",
        price: "29.90 al mese",
        properties: [
            "Fino a 100 Mb in Download.",
            "Fino a 20 Mb in Upload."
        ]
    },
    {
        project_name: "ATM FIBRA 100 PLUS",
        project_type: "Home",
        download: "1 GB",
        upload: "100 MB",
        price: "29.90 al mese",
        properties: [
            "Fino a 1 Gb in Download.",
            "Fino a 100 Mb in Upload.",
            "Unlimited minutes to all of Italy."
        ]
    },
    {
        project_name: "ATM 30",
        project_type: "Home",
        download: "30 MB",
        upload: "3 MB",
        price: "23.90 al mese",
        properties: [
            "Fino a 30 Mb in Download.",
            "Fino a 3 Mb in Upload."
        ]
    },
    {
        project_name: "ATM GO",
        project_type: "Home",
        download: "1000 MB",
        upload: "300 MB",
        price: "26.90 al mese",
        properties: [
            "Fino a 1000 Mb in Download.",
            "Fino a 300 Mb in Upload."
        ]
    },
    {
        project_name: "ATM FIBRA 100%",
        project_type: "Home",
        download: "1 GB",
        upload: "300 MB",
        price: "23.90 al mese",
        properties: [
            "Fino a 1 Gb in Download.",
            "Fino a 300 Mb in Upload."
        ]
    }
]

const business_projects = [
    {
        project_name: "ATM 10",
        project_type: "Business",
        download: "10 MB",
        upload: "2 MB",
        price: "17.90 al mese",
        properties: [
            "Fino a 10 Mb in Download.",
            "Fino a 2 Mb in Upload."
        ]
    },
    {
        project_name: "ATM 30",
        project_type: "Business",
        download: "30 MB",
        upload: "5 MB",
        price: "29.90 al mese",
        properties: [
            "Fino a 100 Mb in Download.",
            "Fino a 20 Mb in Upload."
        ]
    },
    {
        project_name: "ATM GO",
        project_type: "Business",
        download: "1 GB",
        upload: "300 MB",
        price: "26.90 al mese",
        properties: [
            "Fino a 1 Gb in Download.",
            "Fino a 300 Mb in Upload.",
            "Activation at € 79.90 with add. on c/c"
        ]
    },
    {
        project_name: "ATM FIBRA 100%",
        project_type: "Business",
        download: "1 GB",
        upload: "300 MB",
        price: "26.90 al mese",
        properties: [
            "Fino a 1 Gb in Download of REAL FIBRA.",
            "300 Mb in Upload."
        ]
    },
    {
        project_name: "ATM 100 R",
        project_type: "Business",
        download: "100 MB",
        upload: "20 MB",
        price: "29.90 al mese",
        properties: [
            "Fino a 100 Mb in Download.",
            "20 Mb in Upload.",
            "Suitable for rural areas"
        ]
    },
]

function createProperties(prop) {
    var p_props = "";
    for (let i = 0; i < prop.length; i++) {
        p_props += `<i class="fas fa-check-square"></i> ${prop[i]}<br>`;
    }
    return p_props;
}

function createProject() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const p_type = (urlParams.get('type')).toLowerCase();
    const p_name = (urlParams.get('project')).toUpperCase();
    var imgUrl = '';

    var projectContainer = document.getElementById('projectContainer');
    var source_data = null;
    if (p_type === "home") {
        source_data = home_projects;
        imgUrl = './assets/homeProjects.jpg';
    } else if (p_type === "business") {
        source_data = business_projects;
        imgUrl = './assets/businessProjects.jpg';
    }

    for (let project in source_data) {
        if ((source_data[project].project_name).toUpperCase() === p_name) {
            return (
                projectContainer.insertAdjacentHTML('beforeend',
                    `<div class="project-card">
            <div style="background: url('${imgUrl}') center center; background-size: cover;" class="project-header">
                <div class="project-title">
                    <h1>${source_data[project].project_name}</h1>
                </div>
            </div>
            <div class="project-content">
                <div class="project-type">${source_data[project].project_type}</div>
                <div class="specs">
                    <div class="download">
                    ${source_data[project].download}
                    </div>
                    <div class="upload">
                    ${source_data[project].upload}
                    </div>
                </div>
                <div class="card-price"><b><span>€ </span>${source_data[project].price}</b></div>
                <p class="card-text">
                    ${createProperties(source_data[project].properties)}
                </p>
            </div>
        </div>`)
            )
        }
    }
    return (
        projectContainer.insertAdjacentHTML('beforeend',
            `<div class="not-found">Project not found</div>`
        )
    )

}

createProject();