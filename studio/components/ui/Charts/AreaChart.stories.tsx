import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Chart, { AreaChartProps } from './AreaChart'
import dayjs from 'dayjs'

export default {
  title: 'Charts',
} as ComponentMeta<typeof Chart>

const DATA = [290, 430, 649, 422, 321, 893, 111].map((value, index) => ({
  ram_usage: value,
  timestamp: dayjs().subtract(index, 'day').toISOString(),
}))

const PROPS: AreaChartProps<typeof DATA[number]> = {
  title: 'Memory usage',
  xAxisKey: 'timestamp',
  yAxisKey: 'ram_usage',
  data: DATA,
}

export const AreaChart = () => (
  <div className="flex flex-row gap-4 flex-wrap p-10">
    {[
      { title: 'Normal', props: {} },
      { title: 'No title', props: { title: undefined } },
      { title: 'Minimal Header', props: { minimalHeader: true } },
      { title: 'Minimal Highlighted Value', props: { minimalHeader: true, highlightedValue: 123 } },
      { title: 'Highlighted Value', props: { highlightedValue: 123 } },
      { title: 'UTC Dates', props: { displayDateInUtc: true } },
      { title: 'Custom date format', props: { customDateFormat: 'HH:mm' } },
      { title: 'No data', props: { data: [] } },
      { title: 'Value format', props: { format: 'c' } },
      { title: 'Minimal Value format', props: { minimalHeader: true, format: 'c' } },
    ].map(({ title, props }) => (
      <div className="w-72 h-72">
        <ExampleName>{title}</ExampleName>
        <div className="w-full h-full mt-4">
          <Chart {...PROPS} {...props} />
        </div>
      </div>
    ))}
  </div>
)

const ExampleName: React.FC = ({ children }) => (
  <h1 className="font-bold text-scale-1100">{children}</h1>
)