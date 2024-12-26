export function scrollIntoView(elementId: string) {
  const section = document.getElementById(elementId);
  section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
