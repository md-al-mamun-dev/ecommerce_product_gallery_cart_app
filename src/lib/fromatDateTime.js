export default function formatDateTime(isoString) {
    const date = new Date(isoString);
    
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const month = months[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    
    return `${month} ${day}, ${year} at ${hours}:${formattedMinutes} ${ampm}`;
  }