const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: [        // ось Х//
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Unit'
        ],
        datasets: [{
            label: "Pageviews",
            barThickness: 16,
            backgroundColor: '#D6CF6E',
            borderColor: '#ddd',
            data: [31,26,13,23,28,32,25],      //значения по оси У , индексы массивов соответствуют значениям индексов массива labels//
        }, {
            label: "Conversions",
            barThickness: 16,
            backgroundColor: '#14A38B',
            borderColor: '#ddd',
            data: [41,34,16,29,37,43, 32],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 0,
                right: 20,
                bottom: 20,
                left: 20,
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 28,
					boxHeight: 28,
					padding: 45,
                    font: {
                        size: 14,
                        weight: 500,
                    },
                    generateLabels: chart => {
                        const datasets = chart.data.datasets;
                        return datasets.map(((set, idx) => ({
                            text: set.label,
                            borderRadius: 4,
                            fontColor: "#728191",
                            fillStyle: set.backgroundColor,
                            strokeStyle: set.borderColor,
                            datasetIndex: idx
                        })));
                    }
                },
            },
            title: {
				display: true,
				text: "443K Pageviews",
				align: "start",
				color: "#2C2738",
				font: {
					size: 34,
					weight: 600,
				},
				padding: {
					top: 25,
					bottom: 0,
				},
			},
            subtitle: {
                display: true,
                text: 'in last 7 days',
                align: "start",
                color: '#728191',
                font: {
                    size: '18',
                    weight: 500,
                },
                padding: {
                    top: 0,
                    bottom: 35,
                }
            },
        },
        scales: {
            x: {
				grid: {
					display: false,
				},
				ticks: {
					padding: 20,
					color: "#728191",
					font: {
						size: 14,
						weight: 500,
					},
				},
			},
            // y: {
            //     ticks: {
            //         callback: function (value) {
            //             return value + 'k';
            //         },
            //     },
            // },
            y: {
				grid: {
					borderDash: [4, 4],
					drawBorder: false,
				},
				ticks: {
					padding: 20,
					color: "#7C9CBF",
					font: {
						size: 14,
						weight: 500,
					},
					callback: function (value) {
                        if(value % 10 == 0) {
                            return value + 'k';
                        }
                        
                    },
				},
			},
        },
    },
    // new Chart(ctx, {
	// 	type: "bar",
	// 	data: data,
	// 	options: options,
	// });
});
const line = document.getElementById("lineChart").getContext("2d");
const lineChart = new Chart(line, {
    type: "line",
    data: {
        labels: [        // ось Х//
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Unit'
        ],
        datasets: [{
            label: "Ghost Variant",
            backgroundColor: '#14A38B',
            borderColor: '#14A38B',
            data: [180, 145, 55, 50, 100, 110, 65],      //значения по оси У , индексы массивов соответствуют значениям индексов массива labels//
            cubicInterpolationMode: "monotone",
            fill: false,
        }, {
            label: "Fill Variant",
            backgroundColor: '#D6CF6E',
            borderColor: '#D6CF6E',
            data: [10, 110, 105, 40, 49, 155, 180],
            cubicInterpolationMode: "monotone",
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 20,
                left: 20,
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 28,
					boxHeight: 28,
					padding: 45,
                    font: {
                        size: 14,
                        weight: 500,
                    },
                    generateLabels: chart => {
                        const datasets = chart.data.datasets;
                        return datasets.map(((set, idx) => ({
                            text: set.label,
                            borderRadius: 4,
                            fontColor: "#728191",
                            fillStyle: set.backgroundColor,
                            strokeStyle: set.borderColor,
                            datasetIndex: idx
                        })));
                    }
                },
                
            },
            title: {
				display: true,
				text: "984 Signup",
				align: "start",
				color: "#2C2738",
				font: {
					size: 34,
					weight: 600,
				},
				padding: {
					top: 25,
					bottom: 0,
				},
			},
            subtitle: {
                display: true,
                text: 'in last 7 days',
                align: "start",
                color: '#728191',
                font: {
                    size: '18',
                    weight: 500,
                },
                padding: {
                    top: 0,
                    bottom: 35,
                }
            },

        },
        scales: {
            x: {
				grid: {
					display: false,
				},
				ticks: {
					padding: 20,
					color: "#728191",
					font: {
						size: 14,
						weight: 500,
					},
				},
			},
            // y: {
            //     ticks: {
            //         callback: function (value) {
            //             return value + 'k';
            //         },
            //     },
            // },
            y: {
				grid: {
					borderDash: [4, 4],
					drawBorder: false,
				},
				ticks: {
					padding: 20,
					color: "#7C9CBF",
					font: {
						size: 14,
						weight: 500,
					},
                    stepSize: 50,
					callback: function (value) {
                        if(value % 50 == 0) {
                            return value ;
                        }
                        
                    },
				},
			},
        },
    },
    // new Chart(ctx, {
	// 	type: "bar",
	// 	data: data,
	// 	options: options,
	// });
});
const donut = document.getElementById("donutChart").getContext("2d");
const donutChart = new Chart(donut, {
    type: "doughnut",
    data: {
        labels: ["Web", "Mobile", "Social" ],
        datasets: [{
            label: "Web",
            backgroundColor: [ "#14A38B", "#D6CF6E", "#0880AE" ],
            borderColor: [ "#14A38B", "#D6CF6E", "#0880AE" ],
            data: [35, 45, 20],      //значения по оси У , индексы массивов соответствуют значениям индексов массива labels//
            
        }],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '50%',
        layout: {
            padding: {
                top: 0,
                right: 20,
                bottom: 20,
                left: 20,
            }
        },
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 28,
					boxHeight: 28,
					padding: 25,
                    font: {
                        size: 14,
                        weight: 500,
                    },
                    generateLabels: (chart) =>  {
                        const [charsData] = chart.data.datasets;
                        const labels = chart.data.labels;
                        const {data, backgroundColor} = charsData;
                        return data.map(((value, idx) => ({
                            text: `${value}% ${labels[idx]}`,
                            borderRadius: 4,
                            fontColor: "#728191",
                            fillStyle: backgroundColor[idx],
                            strokeStyle: backgroundColor[idx],
                            datasetIndex: idx,
                        })));
                    }
                },
            },
            title: {
				display: true,
				text: "Sale Channels",
				align: "start",
				color: "#2C2738",
				font: {
					size: 34,
					weight: 600,
				},
				padding: {
					top: 25,
					bottom: 0,
				},
			},
            subtitle: {
                display: true,
                text: 'in last 7 days',
                align: "start",
                color: '#728191',
                font: {
                    size: '18',
                    weight: 500,
                },
                padding: {
                    top: 0,
                    bottom: 35,
                }
            },
            
        },
    },
    // new Chart(ctx, {
	// 	type: "bar",
	// 	data: data,
	// 	options: options,
	// });
});