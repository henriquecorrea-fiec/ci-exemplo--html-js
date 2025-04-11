document.getElementById("meuBotao").addEventListener("click",
    function() {
        document.getElementById("mensagem").textContent = "Botão clicado!";
        
        // Create link with image
        const link = document.createElement('a');
        link.href = 'https://example.com'; // Replace with your desired link
        link.target = '_blank';
        
        const img = document.createElement('img');
        img.src = 'https://example.com/image.jpg'; // Replace with your image URL
        img.alt = 'Example image';
        img.style.maxWidth = '200px';
        img.style.marginTop = '20px';
        
        link.appendChild(img);
        document.body.appendChild(link);
    });
