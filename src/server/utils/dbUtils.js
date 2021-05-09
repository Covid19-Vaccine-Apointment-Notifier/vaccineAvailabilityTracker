import _ from "lodash";

export const createFriendlyUrl = async (
  DomainModel,
  friendlyUrl,
  userCondition
) =>
  new Promise(async (resolve, reject) => {
    try {
      const friendlyUrls = await getFriendlyUrlsLike(
        DomainModel,
        friendlyUrl,
        userCondition
      );
      const friendlyUrlCounters = _.transform(
        friendlyUrls,
        (result, friendlyUrl) => {
          const counter = parseInt(friendlyUrl.split("-").pop());
          if (!isNaN(counter)) {
            return result.push(parseInt(friendlyUrl.split("-").pop()));
          }
          return result.push(0);
        }
      );
      const counter = friendlyUrlCounters.length
        ? _.max(friendlyUrlCounters) + 1
        : 0;
      // Do not append digit if there exists no matching friendly url's
      const urlSuffix = counter ? `-${counter}` : "";
      resolve(friendlyUrl + urlSuffix);
    } catch (err) {
      reject(err);
    }
  });

const getFriendlyUrlsLike = (DomainModel, friendlyUrl, userCondition) =>
  new Promise((resolve, reject) => {
    let condition = {};
    if (userCondition) {
      condition = userCondition;
    }
    condition.friendlyUrl = new RegExp(friendlyUrl);
    DomainModel.find(condition, { friendlyUrl: 1 }, (err, friendlyUrls) => {
      if (err) {
        reject(err);
      }
      const retResult = _.transform(friendlyUrls, (result, obj) =>
        result.push(obj.friendlyUrl)
      );
      resolve(retResult);
    });
  });
export const cleanUpNationalCharacters = string => {
  if (typeof string === "string") {
    return string
      .toLowerCase()
      .trim()
      .replace(/[aàáâäãåāa]/g, "a")
      .replace(/[eeèéêëēėę]/g, "e")
      .replace(/[oôöòóœøōõ]/g, "o")
      .replace(/[\s\/_]/g, "-")
      .replace(/[^A-Za-z0-9\-]/g, "") // Remove unsafe characters
      .replace(/-+/g, "-");
  }
  return "";
};
const suggestedFriendlyUrl = (suggestedName, friendlyUrls) => {
  if (!friendlyUrls.hasOwnProperty(suggestedName)) {
    friendlyUrls[suggestedName] = 1;
    return suggestedName;
  }
  const newName = `${suggestedName}-${friendlyUrls[suggestedName]}`;
  friendlyUrls[suggestedName] += 1;
  return suggestedFriendlyUrl(newName, friendlyUrls);
};
