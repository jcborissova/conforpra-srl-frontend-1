import PaginatedView from '../components/PaginatedView';
import CapacitacionSection from '../components/CapacitacionSection';
import { useEffect, useState } from 'react';
import client from '../providers/api';

const ListSearchCapacitaciones = () => {
  const [filterObj, setFilterObj] = useState([]);
  const [update, setUpdate] = useState(false);

  function updateTrainings() {
    setUpdate(true);
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await client.get(`/api/trainings`);
        trainings(response.data.trainings);
        setUpdate(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [update]);

  function trainings(allTrainings) {
    setFilterObj(
      allTrainings.filter(function (e) {
        return e.status === 'visible';
      }),
    );
  }

  return (
    <div>
      <div className="py-5">
        {filterObj.length ? (
          <PaginatedView
            items={filterObj}
            renderItem={(capacitacion) => (
              <CapacitacionSection
                render={updateTrainings}
                capacitacion={capacitacion}
                controls
                archived
              />
            )}
          />
        ) : (
          <div className="flex items-center justify-center">
            <h2>No hay capacitaciones activas</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListSearchCapacitaciones;
