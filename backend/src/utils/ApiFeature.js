import mongoose from "mongoose";

class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);
    if (queryObj.name === "") {
      delete queryObj.name;
    }
    if (queryObj.name && queryObj.name !== "") {
      this.query = this.query.find({
        name: { $regex: queryObj.name, $options: "i" },
      });
    } else {
      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(
        /\b(gte|gt|lte|lt)\b/g,
        (match) => `$${match}`
      );
      this.query = this.query.find(JSON.parse(queryStr));
    }

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy).lean();
    } else {
      this.query = this.query.sort("-createdAt").lean();
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields).lean();
    } else {
      this.query = this.query.select("-__v").lean();
    }

    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit).lean();

    return this;
  }
  searchByName() {
    if (!this.queryString.name || this.queryString.name.trim() === "") {
      return this;
    }
    this.query = this.query
      .find({ name: { $regex: this.queryString.name, $options: "i" } })
      .lean();

    return this;
  }
}
export const applyFilterByObjectIds = (features, queryString) => {
  const filterFields = ["brand", "typeProduct", "cpu", "disk", "ram", "card"];
  filterFields.forEach((field) => {
    if (queryString[field]) {
      const ids = queryString[field].split(",").map((id) => id);
      features.query = features.query.find({ [field]: { $in: ids } });
    }
  });
  return features;
};

export default APIFeatures;
