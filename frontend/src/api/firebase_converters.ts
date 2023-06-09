import { Metadata } from "../definitions/network"
import { Task } from "../definitions/task"
import { ExperimentState } from "../definitions/experimentState"

export const metadataConverter = {
  toFirestore: function (metadata: Metadata) {
    return {
      id: metadata.id,
      name: metadata.name,
      description: metadata.description,
      color: metadata.color,
    }
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options)
    return new Metadata(data.id, data.name, data.description, data.color)
  },
}

export const tasksConverter = {
  toFirestore: function (task: Task) {
    return {
      // id will be generated by firestore
      mlModelType: task.mlModelType,
      taskType: task.taskType,
      epochs: task.epochs,
      trainPercentage: task.trainPercentage,
      //useCustomSplit: task.useCustomSplit,
      learningRate: task.learningRate,
      hiddenLayerSizes: task.hiddenLayerSizes,
      seed: task.seed,
      createdAt: task.createdAt,
      // @ts-ignore
      state: ExperimentState[task.state],
      xColumns: task.xColumns,
      yColumn: task.yColumn,
    }
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options)
    return new Task(
      data.id,
      data.mlModelType,
      data.taskType,
      data.epochs,
      data.trainPercentage,
      data.useCustomSplit,
      data.learningRate,
      data.hiddenLayerSizes,
      data.seed,
      data.createdAt,
      data.state,
      data.xColumns,
      data.yColumn,
      data.expertOpinion,
      data.accuracy,
      data.precision,
      data.recall,
      data.f1,
      data.auc,
      data.losses,
      data.predictions,
      data.embeddings,
      data.errorMessage,
    )
  },
}
