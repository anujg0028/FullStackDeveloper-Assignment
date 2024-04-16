let handleOnClick = () => {

    const apiEndpoint = 'https://chimpu.xyz/api/post.php';
    const phoneNumber = '7317756829'; // Replace with desired phone number

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `phonenumber=${phoneNumber}`
    })
        .then(response => {
            if (response.ok) {
                const headers = response.headers;
                console.log(headers)
                const headerElements = []; // Array to hold React elements
                headers.forEach((value, name) => {
                    // Create a <p> element for each header
                    headerElements.push(
                        React.createElement(
                            'p',
                            { key: name },
                            `${name}: ${value}`
                        )
                    );
                });
                const content = React.createElement(
                    'div',
                    { className: 'contentDiv' },
                    headerElements // Append all <p> elements to the parent <div>
                );
                const root = document.getElementById('root');
                root.innerHTML = '';
                ReactDOM.render(content, root);
            } else {
                console.error('Request was not successful.');
            }
        })
        .catch(error => {
            console.error('Error occurred while sending the request:', error);
        });
}

function createTableHeader() {

    let content = React.createElement(
        'div',
        { className: 'divTag' },
        React.createElement(
            'button',
            { className: 'submitBtn', onClick: () => handleOnClick() },
            "Click it to call API"
        )
    );
    return content;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(createTableHeader());
