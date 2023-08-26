 // Obtém todos os links de navegação
 const navLinks = document.querySelectorAll('nav a');

 // Obtém todas as seções
 const sections = document.querySelectorAll('section');

 // Função para alternar a classe "hidden" nas seções
 function toggleSection(sectionId) {
   sections.forEach(section => {
     if (section.id === sectionId) {
       section.classList.remove('hidden');
     } else {
       section.classList.add('hidden');
     }
   });
 }

 // Adiciona o evento de clique aos links de navegação
 navLinks.forEach(link => {
   link.addEventListener('click', e => {
     e.preventDefault();
     const targetSectionId = link.getAttribute('href').substring(1);
     toggleSection(targetSectionId);

     // Atualiza a classe "active" no link de navegação selecionado
     navLinks.forEach(navLink => {
       if (navLink === link) {
         navLink.classList.add('active');
       } else {
         navLink.classList.remove('active');
       }
     });
   });
 });

 // Função para alternar as abas
 function changeTab(evt, tabId) {
   // Obtém todos os elementos com a classe "tab-content"
   const tabContents = document.querySelectorAll('.tab-content');

   // Remove a classe "active" de todas as abas
   tabContents.forEach(tab => {
     tab.classList.remove('active');
   });

   // Adiciona a classe "active" na aba selecionada
   const selectedTab = document.getElementById(tabId);
   selectedTab.classList.add('active');
 }