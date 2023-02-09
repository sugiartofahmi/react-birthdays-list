import MainLayout from "../../layouts/MainLayout";
import MapData from "../../modules/Home/MapData";
import data from "../../helper/data";
import { useState } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
const Home = () => {
  const [people, setPeople] = useState(data);
  return (
    <MainLayout>
      <Card>
        <h1 className="text-2xl">{people.length} Birthdays Today</h1>
        <MapData data={people} />
        <Button text={"Delete All"} onClick={() => setPeople([])} />
      </Card>
    </MainLayout>
  );
};
export default Home;
