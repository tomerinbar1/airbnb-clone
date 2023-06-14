import React, { PureComponent } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
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
    const { x, y, fill, value } = this.props
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
    super(props)

    this.state = {
      data: props.orders || [],
      format: props.format || 'daily',
      dateStat: []
    }
  }

  setSumFormat() {
    const { format } = this.props
    console.log('format', format);
    return format
  }

  getDailyIncome() {
    const { orders } = this.props
    const dateStat = orders.reduce((result, order) => {
      const orderDate = new Date(order.createdAt).toLocaleDateString()
      const existingOrder = result.find(item => item.date === orderDate);

      if (existingOrder) {
        existingOrder.price += order.totalPrice;
      } else {
        result.push({ date: orderDate, price: order.totalPrice });
      }
      return result
    }, [])
    console.log('dateStat', dateStat);
    return dateStat
  }

  getMonthlyIncome() {
    const { orders } = this.props
    const dateStat = orders.reduce((result, order) => {
      const orderDate = new Date(order.createdAt);
      const month = orderDate.toLocaleString('en-US', { month: 'short' }).toUpperCase();
      const date = `${month}`;
      const existingMonth = result.find(item => item.date === date);

      if (existingMonth) {
        existingMonth.price += order.totalPrice;
      } else {
        result.push({
          date,
          price: order.totalPrice,
        })
      }

      return result
    }, []);
    return dateStat
  }

  render() {
    const format = this.setSumFormat()
    const data = this.setSumFormat()? this.getDailyIncome() : this.getMonthlyIncome()
    return data.length && (
      <BarChart
        width={250}
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
          barSize={100}
          fontSize='14'
          fontFamily="sans-serif"
          label={<CustomizedLabel />}
        >
          {
            data.map((entry, index) => (
              <Cell key={index} fill='#5942ce' fontSize='16' />
            ))
          }
        </Bar>
      </BarChart>
    )
  }
}