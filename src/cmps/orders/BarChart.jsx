import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    "AnswerRef": "one",
    "Text": "5 out of 50 throws",
    "Score": 0,
    "RespondentPercentage": 12,
    "Rank": 1
  },
  {
    "AnswerRef": "two",
    "Text": "25 out of 50 throws",
    "Score": 0,
    "RespondentPercentage": 32,
    "Rank": 2
  },
  {
    "AnswerRef": "three",
    "Text": "30 out of 50 throws",
    "Score": 1,
    "RespondentPercentage": 41,
    "Rank": 3
  },
  {
    "AnswerRef": "four",
    "Text": "None of the above",
    "Score": 0,
    "RespondentPercentage": 16,
    "Rank": 4
  }
]

class CustomizedLabel extends PureComponent {

  render() {
    const { x, y, fill, value } = this.props;
    console.log('value', value, 'x', x, 'y', y, 'fill', fill);
    return <text
      x={x}
      y={y}
      dy={-4}
      fontSize='16'
      fontFamily='sans-serif'
      fill={fill}
      textAnchor="center">{value}</text>
  }
}


export default class MyBarChart extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: props.orders || [],
      dateStat: []
    }
  }

  getAvgPriceAccordingToDate() {
    const { orders } = this.props
    const dateStat = orders.reduce((acc, order) => {
      const orderDate = new Date(order.createdAt).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })
      acc.push({ date: orderDate, price: order.totalPrice })
      return acc

    }, [])
    return dateStat.slice(0, 4)
  }


  render() {
    const data = this.getAvgPriceAccordingToDate()
    return data.length && (
      <BarChart
        width={225}
        height={260}
        data={data}
        margin={{ top: 5, right: 0, left: 0, bottom: 25 }}>
        <XAxis
          dataKey="date"
          fontSize='16'
          fontFamily="sans-serif"
          tickSize
          dy='25'
        />
        <YAxis hide />
        <CartesianGrid
          vertical={false}
          stroke="#ebf3f0"
        />
        <Bar
          dataKey="price"
          barSize={170}
          fontSize='16'
          fontFamily="sans-serif"
          label={<CustomizedLabel />}
        >
          {
            data.map((entry, index) => (
              <Cell fill='#61bf93' fontSize='16' />
            ))
          }
        </Bar>
      </BarChart>
    )
  }
}