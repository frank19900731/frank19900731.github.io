/**
 * Created by frank on 12/23/14.
 */

function generateLegend(chart, legendHolder) {
    legendHolder.html(chart.generateLegend());
    legendHolder.children('ul').css('list-style', 'none');
    legendHolder.find('span').each(function() {
        $(this).css({
            'display': 'inline-block',
            'width': '20px',
            'height': '20px',
            'margin-right': '10px',
            'border-radius': '5px'
        }).text(String.fromCharCode(160));
    });
    legendHolder.find('li').each(function() {
        var legend = $(this).get(0).lastChild.nodeValue;
        $(this).get(0).lastChild.remove();
        $('<span>').css({
            'display': 'inline-block',
            'vertical-align': '-6%',
            'height': '20px'
        }).text(legend).appendTo($(this));
        $(this).css('margin-bottom', '5px');
    });
}

function generateLegendForDoughnut(moduleDoughnut, legendHolder) {
    generateLegend(moduleDoughnut, legendHolder);

    legendHolder.find('li').each(function() {
        $(this).css({
            'float': 'left',
            'margin-left': '20px'
        })
    });

    var helpers = Chart.helpers;
    // Include a html legend template after the module doughnut itself
    helpers.each(legendHolder.find('li'), function(legendNode, index){
        helpers.addEvent(legendNode, 'mouseover', function(){
            var activeSegment = moduleDoughnut.segments[index];
            activeSegment.save();
            activeSegment.fillColor = activeSegment.highlightColor;
            moduleDoughnut.showTooltip([activeSegment]);
            activeSegment.restore();
        });
    });
    helpers.addEvent(legendHolder.children().eq(0), 'mouseout', function(){
        moduleDoughnut.draw();
    });
}

$.getJSON("/json/data2014.json", function(data) {
    (function(){
        var ctx = $("#mail-from").get(0).getContext("2d");
        var chdata = data['mail-from'];

        generateLegendForDoughnut(
            new Chart(ctx).Doughnut(chdata, {
                segmentShowStroke : true,
                segmentStrokeWidth : 2,
                segmentStrokeColor : 'rgba(255, 255, 255, 0.1)',
                responsive: true
            }),
            $('#mail-from-legend')
        );

    })();

    (function() {
        var ctx = $("#mail-session").get(0).getContext("2d");
        var chdata = {
            labels : data['mail-session']['label'],
            datasets : [
                {
                    fillColor : "rgba(220,220,220,0.5)",
                    strokeColor : "rgba(220,220,220,1)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    data : data['mail-session']['data']
                }
            ]
        };
        new Chart(ctx).Bar(chdata, {responsive: true});
    })();

    (function() {
        var ctx = $("#application-2014").get(0).getContext("2d");
        var chdata = {
            labels : data['application-2014']['label'],
            datasets : [
                {
                    label: 'Launched',
                    fillColor : "rgba(188, 220, 92,0.5)",
                    strokeColor : "rgba(188, 220, 92,1)",
                    pointColor : "rgba(188, 220, 92,1)",
                    pointStrokeColor : "#fff",
                    data : data['application-2014']['data2']
                },
                {
                    label: 'Active',
                    fillColor : "rgba(151,187,205,0.5)",
                    strokeColor : "rgba(151,187,205,1)",
                    pointColor : "rgba(151,187,205,1)",
                    pointStrokeColor : "#fff",
                    data : data['application-2014']['data1']
                }
            ]
        };

        generateLegend(
            new Chart(ctx).Line(chdata, {responsive: true}),
            $('#application-2014-legend')
        );
    })();

    (function() {
        var ctx = $("#application-2014-half").get(0).getContext("2d");
        var chdata = {
            labels : data['application-2014-1']['label'],
            datasets : [
                {
                    label: 'Launched',
                    fillColor : "rgba(188, 220, 92,0.5)",
                    strokeColor : "rgba(188, 220, 92,1)",
                    pointColor : "rgba(188, 220, 92,1)",
                    pointStrokeColor : "#fff",
                    data : data['application-2014-1']['data2']
                },
                {
                    label: 'Active',
                    fillColor : "rgba(151,187,205,0.5)",
                    strokeColor : "rgba(151,187,205,1)",
                    pointColor : "rgba(151,187,205,1)",
                    pointStrokeColor : "#fff",
                    data : data['application-2014-1']['data1']
                }
            ]
        };

        generateLegend(
            new Chart(ctx).Line(chdata, {responsive: true}),
            $('#application-2014-half-legend')
        );

    })();

    (function() {
        var ctx = $("#websites").get(0).getContext("2d");
        var chdata = data['websites'];

        generateLegendForDoughnut(
            new Chart(ctx).Doughnut(chdata, {
                segmentShowStroke : true,
                segmentStrokeWidth : 2,
                segmentStrokeColor : 'rgba(255, 255, 255, 0.1)',
                responsive: true
            }),
            $('#websites-legend')
        );

    })();

    (function() {
        var ctx = $("#network").get(0).getContext("2d");
        var chdata = {
            labels : data['network']['label'],
            datasets : [
                {
                    label: 'Launched',
                    fillColor : "rgba(188, 220, 92,0.5)",
                    strokeColor : "rgba(188, 220, 92,1)",
                    pointColor : "rgba(188, 220, 92,1)",
                    pointStrokeColor : "#fff",
                    data : data['network']['data2013']
                },
                {
                    label: 'Active',
                    fillColor : "rgba(151,187,205,0.5)",
                    strokeColor : "rgba(151,187,205,1)",
                    pointColor : "rgba(151,187,205,1)",
                    pointStrokeColor : "#fff",
                    data : data['network']['data2014']
                }
            ]
        };

        generateLegend(
            new Chart(ctx).Line(chdata, {responsive: true}),
            $('#network-legend')
        );
    })();

});