/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { fromIterable, forEach, collect } from "../../src/index.js";

Mocha.describe("forEach()", function() {
  Mocha.it("executes", async function() {
    const iterable = [1, 2, 3];
    let callCount = 0;
    const list = await collect(
      fromIterable(iterable).pipeThrough(
        forEach(x => {
          callCount++;
          return x + 1;
        })
      )
    );

    chai.expect(list).to.deep.equal(iterable);
    chai.expect(callCount).to.equal(iterable.length);
  });
});
