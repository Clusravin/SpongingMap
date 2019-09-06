var data = [{"name":"China", "value":32},
            {"name":"Taiwan", "value":32},
            {"name":"Ireland", "value":1}];

Highcharts.Map('map', {
    title: {
        text: ''
    },
    colorAxis: {
        min: 0,
        minColor: '#7651d0',
        maxColor: '#341d6c'
    },
    series: [{
        data: data,
        name: '',
        mapData: Highcharts.maps['custom/world'],
        joinBy: 'name',
        borderWidth: '0',
        color: '#000000'
    }],
    tooltip: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    }
});
