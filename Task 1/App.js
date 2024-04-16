const data=[
    ['Onboarding call', '', '', '', '', '',''],
    ['Google Search Console Access', '', '', '', '','',''],
    ['Google Analytics Access', '', '', '', '','',''],
    ['Website Access', '', '', '', '','',''],
    ['Technical Audit', '', '', '', '','',''],
    ['Anchor Text and Semantic Analysis', '', '', '', '','',''],
    ['Competitor Analysis', '', '', '', '','',''],
    ['Anchor Text/URL Mapping', '', '', '', '','',''],
    ['Google Data Studio Report + Local Reporting Suite', '', '', '', '','',''],
    ['Site Level Optimization', '', '', '', '','',''],
    ['On Page Optimization', '', '', '', '','',''],
    ['Content Creation', '', '', '', '','',''],
    ['Content Publishing', '', '', '', '','',''],
    ['Premium Press Release', '', '', '', '','',''],
    ['Authority Niche Placements', '', '', '', '','',''],
    ['Review Management', '', '', '', '','',''],
    ['Index Links', '', '', '', '','',''],
    ['Video Recap', '', '', '', '','','']
];

function createTableHeader() {
    const tableHeader=React.createElement(
        'thead',
        null,
        React.createElement(
            'tr',
            null,
            React.createElement('th', null, 'Month 1'),
            React.createElement('th', null, ''),
            React.createElement('th', null, ''),
            React.createElement('th', null, ''),
            React.createElement('th', null, ''),
            React.createElement('th', null, ''),
            React.createElement('th', null, '')
        )
    );
    return tableHeader;
}

function createTableBody() {
    const handleAPICall=(rowIndex,colIndex,newValue)=>{
        data[rowIndex][colIndex]=newValue;
        console.log('API call with the value: ',newValue);
    };

    const tableBody=React.createElement(
        'tbody',
        { style: { width: '600px' }},
        data.map((row, rowIndex) => {
            const tableRow=React.createElement(
                'tr',
                { key: rowIndex },
                row.map((cellValue, colIndex)=>{
                    const tableCell=React.createElement(
                        'td',
                        {
                            key: colIndex,
                            style: { width: colIndex == 0 ? '400px': '200px'},
                            className: colIndex === 0 ? 'first-column' : 'editable',
                            contentEditable: colIndex!==0,
                            onBlur: (event)=>{
                                const newValue=event.target.textContent.trim();
                                handleAPICall(rowIndex,colIndex,newValue);
                            }
                        },
                        cellValue
                    );
                    return tableCell;
                })
            );
            return tableRow;
        })
    );
    return tableBody;
}

function createTable() {
    const table=React.createElement(
        'table',
        { style: { borderCollapse: 'collapse' }},
        createTableHeader(),
        createTableBody()
    );
    return table;
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(createTable());
