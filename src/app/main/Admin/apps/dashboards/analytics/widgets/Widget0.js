import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import ReactApexChart from 'react-apexcharts';
import _ from '@lodash';

function Widget0(props) {
  const theme = useTheme();
  const data = _.merge({}, props.data);

  _.setWith(data, 'options.colors', [theme.palette.secondary.main]);

  return (
    <Card className="w-full rounded-20 shadow">
      <div className="p-20 pb-0">
        <Typography className="h2 font-medium" paddingTop="140px" paddingLeft="20px">Total Earning</Typography>

        {/* <div className="flex flex-row flex-wrap items-center mt-12">
          <Typography className="text-48 font-semibold leading-none tracking-tighter">
            {data.impressions.value}
          </Typography>

          <div className="flex flex-col mx-8">
            {data.impressions.ofTarget > 0 && (
              <Icon className="text-green text-20">trending_up</Icon>
            )}
            {data.impressions.ofTarget < 0 && (
              <Icon className="text-red text-20">trending_down</Icon>
            )}
            <div className="flex items-center">
              <Typography className="font-semibold" color="textSecondary">
                {data.impressions.ofTarget}%
              </Typography>
              <Typography className="whitespace-nowrap mx-4" color="textSecondary">
                of target
              </Typography>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="h-96 w-100-p">
        <ReactApexChart
          options={data.options}
          series={data.series}
          type={data.options.chart.type}
          height={data.options.chart.height}
        />
      </div> */}
    </Card>
  );
}

export default memo(Widget0);
