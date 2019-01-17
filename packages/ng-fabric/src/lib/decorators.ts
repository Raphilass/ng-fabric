// Copyright (c) 2019 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import "reflect-metadata";

export function RenderingContainerName(containerName: string): any {
  return (target: any) => {
    Reflect.defineMetadata("templates:containerName", containerName, target);
    return target;
  };
}
