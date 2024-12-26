export function isScrolledIntoView(elementId: string) {
  const section = document.getElementById(elementId);
  if (section) {
    const docViewTop = window.visualViewport.pageTop;
    const docViewBottom = docViewTop + window.visualViewport.height;
    const elemTop = section?.offsetTop;
    const elemBottom = elemTop + section.offsetHeight;
    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }
  return false;
}
