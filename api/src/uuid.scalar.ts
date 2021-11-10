import {CustomScalar, Scalar} from "@nestjs/graphql"
import {Kind, ValueNode} from "graphql"

@Scalar(`UUID`)
export class UuidScalar implements CustomScalar<string, string> {
  description = `The \`UUID\` scalar type represents a v4 UUID.`

  parseValue(value: string): string {
    return value
  }

  serialize(value: string): string {
    return value
  }

  parseLiteral(ast: ValueNode): string | null {
    if (ast.kind === Kind.STRING) {
      return ast.value
    } else {
      return null
    }
  }
}
