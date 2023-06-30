import AccelerationSvg from "../assets/acceleration.svg";
import EnergySvg from "../assets/energy.svg";
import ExchangeSvg from "../assets/exchange.svg";
import ForceSvg from "../assets/force.svg";
import GasolineSvg from "../assets/gasoline.svg";
import HybridSvg from "../assets/hybrid.svg";
import PeopleSvg from "../assets/people.svg";
import SpeedSvg from "../assets/speed.svg";

export function getAcessoryIcon(type: string) {
  switch (type) {
    case "speed":
      return SpeedSvg
    case "acceleration":
      return AccelerationSvg
    case "turning_diameter":
      return ForceSvg
    case "gasoline_motor":
      return GasolineSvg
    case "electric_motor":
      return EnergySvg
    case "hybrid_motor":
      return HybridSvg
    case "exchange":
      return ExchangeSvg
    case "seats":
      return PeopleSvg
    default:
      return null;
  }
}