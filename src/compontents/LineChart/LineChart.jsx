import { LineChart as LChart, Line, Tooltip, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const studentData = [
    {name: "Alice",math_marks: 85,bangla_marks: 70,english_marks: 75,physics_marks: 80,},
    { name: "Bob",math_marks: 72,bangla_marks: 65,english_marks: 68,physics_marks: 70,},
    { name: "Charlie", math_marks: 90,bangla_marks: 85,english_marks: 88,physics_marks: 92,},
    { name: "David",math_marks: 78,bangla_marks: 72,english_marks: 75,physics_marks: 80,},
    { name: "Emily",math_marks: 65,bangla_marks: 60,english_marks: 55,physics_marks: 58,},
    {name: "Frank",math_marks: 82,bangla_marks: 78,english_marks: 80,physics_marks: 85,},
    { name: "Grace",math_marks: 93,bangla_marks: 90,english_marks: 92,physics_marks: 95,},
    {
      name: "Hannah",
      math_marks: 88,
      bangla_marks: 85,
      english_marks: 90,
      physics_marks: 92,
    },
    {
      name: "Ian",
      math_marks: 76,
      bangla_marks: 72,
      english_marks: 78,
      physics_marks: 80,
    },
    {
      name: "Jane",
      math_marks: 70,
      bangla_marks: 68,
      english_marks: 72,
      physics_marks: 75,
    },
  ];

  return (
    <div>
      <LChart width={500} height={400} data={studentData} margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Line dataKey={"math_marks"} stroke="red"></Line>
        <Line dataKey={'bangla_marks'} stroke="blue"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
