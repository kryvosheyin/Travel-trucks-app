import { createSelector } from '@reduxjs/toolkit';
import {
  selectLocation,
  selectEquipment,
  selectVehicleType,
} from '@redux/filters/selectors';

export const selectAllCampers = state => state.campers.items;
export const selectCamperById = state => state.campers.camper;
export const selectPage = state => state.campers.page;

export const selectIsLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;

export const selectFilteredCampers = createSelector(
  [selectAllCampers, selectLocation, selectEquipment, selectVehicleType],
  (campers, location, equipment, vehicleType) => {
    return campers.filter(camper => {
      if (location && !camper.location.includes(location)) {
        return false;
      }

      if (equipment.length > 0) {
        const equipmentChecks = {
          AC: camper.AC,
          automatic: camper.transmission === 'automatic',
          kitchen: camper.kitchen,
          TV: camper.TV,
          bathroom: camper.bathroom,
        };

        for (const item of equipment) {
          if (!equipmentChecks[item]) {
            return false;
          }
        }
      }

      if (vehicleType && camper.form !== vehicleType) {
        return false;
      }

      return true;
    });
  }
);
