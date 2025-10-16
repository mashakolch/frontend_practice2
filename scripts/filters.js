
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

   
    function filterProjects(filterValue) {
        projectItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-tech').includes(filterValue)) {
                item.classList.remove('hidden');
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
                item.classList.add('hidden');
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            filterProjects(filterValue);
        });
    });

    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        new bootstrap.Carousel(carousel);
    });

    function handleUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const filter = urlParams.get('filter');
        if (filter) {
            const targetButton = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
            if (targetButton) {
                targetButton.click();
            }
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            const url = new URL(window.location);
            if (filterValue === 'all') {
                url.searchParams.delete('filter');
            } else {
                url.searchParams.set('filter', filterValue);
            }
            window.history.replaceState({}, '', url);
        });
    });

    handleUrlParams();
});

function filterProjectsByTechnology(technology) {
    const button = document.querySelector(`.filter-btn[data-filter="${technology}"]`);
    if (button) {
        button.click();
    }
}

function resetProjectsFilter() {
    const allButton = document.querySelector('.filter-btn[data-filter="all"]');
    if (allButton) {
        allButton.click();
    }
}