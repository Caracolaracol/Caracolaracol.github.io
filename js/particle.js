// @path-json can be an object or an array, the first will be loaded directly, the object from the array will be random selected
/* tsParticles.loadJSON(@dom-id, @path-json, @callback (optional)); */
import { tsParticles } from "tsparticles-engine";

(async () => {
    await tsParticles.load("tsparticles", {
    preset: "firefly",
    });
})();

//or

/* tsParticles.load(@dom-id, @options); */

;
