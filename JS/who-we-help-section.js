document.addEventListener("DOMContentLoaded", function () {
        var sections = document.querySelectorAll('.target-section');
        var image = document.getElementById('sectionImage');
        var imageContainer = document.getElementById('imageContainer');
        var images = {
            section1: 'assets/images/Section-1.svg',
            section2: 'assets/images/Section-2.svg',
            section3: 'assets/images/Section-3.svg'
};
    
function activateSection(section) {
            // Reset all
        for (var j = 0; j < sections.length; j++) {
                var desc = sections[j].querySelector('.description');
                var h3 = sections[j].querySelector('h3');
    
                if (desc) desc.classList.add('hidden');
                if (h3) h3.classList.remove('text-[#01373D]');
    
                sections[j].classList.remove(
                    'border-l-4', 'border-t-4', 'md:border-l-4', 'border-[#01373D]', 'pl-4', 'pt-4', 'border-b-4'
                );
        }
    
            // Activate current
        var desc = section.querySelector('.description');
        var heading = section.querySelector('h3');
    
        if (desc) desc.classList.remove('hidden');
        if (heading) heading.classList.add('text-[#01373D]');
    
        section.classList.add(
                'border-[#01373D]',         
                'pt-4',                    
                'md:border-l-4',           
                'md:pl-4'                  
        );
    
        if (window.innerWidth < 768) {
                section.classList.add('border-b-4');
        }
    
        var id = section.id;
            if (images[id]) {
                image.src = images[id];
            }
    
            if (window.innerWidth < 768) {
                section.parentNode.insertBefore(imageContainer, section);
            }
        }
    
        sections.forEach(function (section) {
            var heading = section.querySelector('h3');
            heading.addEventListener('click', function () {
                activateSection(section);
            });
        });
    
        activateSection(sections[0]);
    
        window.addEventListener('resize', function () {
            if (window.innerWidth >= 768) {
                var container = document.getElementById('targetContainer');
                if (container && imageContainer) {
                    container.appendChild(imageContainer);
                }
                sections.forEach(function (section) {
                    section.classList.remove('border-b-4');
                });
            }
        });
    });
    