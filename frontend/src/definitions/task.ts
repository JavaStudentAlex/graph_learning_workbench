import type { MLModelType } from "./mlModelType";
import type { TaskType } from "./taskType";
import type { Timestamp } from "firebase/firestore"
import type { ExperimentState } from "./experimentState"

export class Task {
  constructor(
    public id: string = undefined,
    public mlModelType: MLModelType = undefined,
    public taskType: TaskType = undefined,
    public epochs: number = undefined,
    public trainPercentage: number = undefined,
    public useCustomSplit: boolean = undefined,
    public learningRate: number = undefined,
    public hiddenLayerSizes: number[] = undefined,
    public seed: number = undefined,
    public createdAt: Timestamp = undefined,
    public state: ExperimentState = undefined,
    public xColumns: string[] = undefined,
    public yColumn: string = undefined,
    public expertOpinion: string = undefined,
    public accuracy: number = undefined,
    public precision: number = undefined,
    public recall: number = undefined,
    public f1: number = undefined,
    public auc: number = undefined,
    public losses: number[] = undefined,
    public predictions: Record<string, string> = undefined,
    public embeddings: Record<string, number[]> = undefined,
    public errorMessage: string = undefined
  ) {}

  public equals(other: Task): boolean {
    // Id is generated by firestore, so it is not compared
    return (
      this.mlModelType === other.mlModelType &&
      this.taskType === other.taskType &&
      this.epochs === other.epochs &&
      this.trainPercentage === other.trainPercentage &&
      this.learningRate === other.learningRate &&
      this.hiddenLayerSizes === other.hiddenLayerSizes &&
      this.seed === other.seed &&
      this.xColumns === other.xColumns &&
      this.yColumn === other.yColumn
    );
  }
}
