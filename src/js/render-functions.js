export function imagesTemplate(image) {
  return `<li class="card user-item" data-id="${image.id}">
  <img
    src="https://source.unsplash.com/720x1280/?random=${id}&girl,portret,celebrity"
    alt="#"
    class="user-avatar"
  />
  <h3 class="user-title">${name}</h3>
  <p>Phone: ${email}</p>
  <p>Email: ${phone}</p>
  <button class="btn button">DELETE</button>
</li>`;
}
