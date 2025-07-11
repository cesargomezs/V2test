fetch('labels.json')
    .then(response => response.json())
    .then(data => {
      const contenedor = document.getElementById('labels');

      data.forEach(label => {
        return label;
      });

    })
.catch(error => console.error('Error al cargar servicios:', error));