import { CategoryGroup } from "@/types";
import { accountPeopleGroup } from "./accountPeopleGroup/accountPeopleGroup";
import { baseGroup } from "./baseGroup/baseGroup";
import { carouselGroup } from "./carouselGroup/carouselGroup";
import { dataChartGroup } from "./dataChartGroup/dataChartGroup";
import { ecommerceGroup } from "./ecommerceGroup/ecommerceGroup";
import { formGroup } from "./formGroup/formGroup";
import { frameBorderGroup } from "./frameBorderGroup/frameBorderGroup";
import { imageMediaGroup } from "./imageMediaGroup/imageMediaGroup";
import { listGridGroup } from "./listGridGroup/listGridGroup";
import { marketingGroup } from "./marketingGroup/marketingGroup";
import { navigationGroup } from "./navigationGroup/navigationGroup";
import { placeRealEstateGroup } from "./placeRealEstateGroup/placeRealEstateGroup";
import { projectTaskGroup } from "./projectTaskGroup/projectTaskGroup";
import { textGroup } from "./textGroup/textGroup";
import { sectionGroup } from "./sectionGroup/sectionGroup";

export const categoryGroups: CategoryGroup[] = [
    baseGroup,
    navigationGroup,
    listGridGroup,
    sectionGroup,
    ecommerceGroup, // -
    marketingGroup,
    accountPeopleGroup,
    dataChartGroup,
    projectTaskGroup,
    placeRealEstateGroup,
    frameBorderGroup,
    imageMediaGroup,
    textGroup,
    carouselGroup,
    formGroup,
].filter(group => {
    // only show groups which have elements
    if (group.slug && group?.categories && group?.categories?.length > 0) {
        return true;
    } return false
})