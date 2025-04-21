// Add this script to a browser console when viewing the site to inject a title
if (!document.title) {
  document.title = "Proyecto Salvaje | Regenerative Village School";
  
  // Also try to add the title tag to the document if it's missing
  if (!document.querySelector('title')) {
    const titleElement = document.createElement('title');
    titleElement.textContent = "Proyecto Salvaje | Regenerative Village School";
    document.head.insertBefore(titleElement, document.head.firstChild);
  }
  
  console.log("Title has been added to the page");
} 