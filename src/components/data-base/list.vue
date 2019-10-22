<template>
<div class="list-page">
    <Button @click="createShow = true" size="small" type="primary">Create</Button>
    <Divider orientation="left">列表</Divider>

    <Table border :columns="columns" :data="data"></Table>

    <Drawer title="Create" v-model="createShow" width="720" :mask-closable="false" :styles="styles">
        <Form :model="formData">
            <Row :gutter="32">
                <Col span="12">
                <FormItem label="ID" label-position="top">
                    <Input v-model="formData.id" placeholder="数据表的唯一标识，仅字母" />
                </FormItem>
                </Col>
                <Col span="12">
                <FormItem label="Name" label-position="top">
                    <Input v-model="formData.name" placeholder="数据表名字" />
                </FormItem>
                </Col>
            </Row>
            <FormItem label="备注" label-position="top">
                <Input type="textarea" v-model="formData.note" :rows="4" placeholder="备注" />
            </FormItem>
            <table>
                <thead>
                    <tr style="width:100%;">
                        <th style="width:50px;text-align:right">序号</th>
                        <th style="width:180px;text-align:right">属性名</th>
                        <th style="width:180px;text-align:right">数据类型</th>
                        <th style="width:80px;text-align:right">可为空</th>
                        <th style="width:80px;text-align:right">可重复</th>
                        <th style="width:180px;text-align:right">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(o,i) in params" :key="i">
                        <td style="text-align:right">{{i+1}}</td>
                        <td style="text-align:right">{{o.name}}</td>
                        <td style="text-align:right">{{o.type}}</td>
                        <td style="text-align:right">{{o.isnull}}</td>
                        <td style="text-align:right">{{o.iskey}}</td>
                        <td style="text-align:right">----</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th><Input size="small" v-model="name" placeholder="数据表的唯一标识，仅字母" /></th>
                        <th>
                            <Select size="small" v-model="type">
                                <Option v-for="item in types" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </th>
                        <th style="text-align:right">
                            <el-switch v-model="isnull" active-color="#13ce66"></el-switch>
                        </th>
                        <th style="text-align:right">
                            <el-switch v-model="iskey" active-color="#13ce66"></el-switch>
                        </th>
                        <th style="text-align:right">
                            <Button size="small" @click="addParam" icon="md-checkmark"></Button>
                        </th>
                    </tr>
                </tfoot>

            </table>
        </Form>
        <div style="width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        background: #fff;">
            <Button style="margin-right: 8px" @click="createShow = false">Cancel</Button>
            <Button type="primary" @click="createShow = false">Submit</Button>
        </div>
    </Drawer>
</div>
</template>

<script>
import formatDate from './../../util/time'
export default {
    name: 'HelloWorld',
    data() {
        return {
            columns: [{
                title: 'ID',
                key: 'id',
                sortable: true
            }, {
                title: '名称',
                key: 'name',
                sortable: true
            }, {
                title: '创建时间',
                key: 'createTime',
                sortable: true,
                render: (h, params) => {
                    return h('div',
                        formatDate(new Date(params.row.createTime), 'yyyy-MM-dd hh:mm')
                    )
                }
            }, {
                title: '最近修改时间',
                key: 'lastModifyTime',
                sortable: true,
                render: (h, params) => {
                    return h('div',
                        formatDate(new Date(params.row.lastModifyTime), 'yyyy-MM-dd hh:mm')
                    )
                }
            }],
            data: [],
            name: null,
            type: null,
            isnull: true,
            iskey: false,
            types: [{
                label: '数字',
                value: "double"
            }, {
                label: '文字',
                value: "varchar(255)"
            }, {
                label: '文本',
                value: "txt"
            }],
            params: [],
            styles: {
                height: 'calc(100% - 55px)',
                overflow: 'auto',
                paddingBottom: '53px',
                position: 'static'
            },
            formData: {
                name: '',
                url: '',
                owner: '',
                type: '',
                approver: '',
                date: '',
                desc: ''
            },
            createShow: false,
            color1: '#19be6b',
            msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            let param = {
                fields: ["id", "name", "creator", "createTime", "lastModifyTime"]
            }
            this.$post("/base-table/list", param).then(
                (response) => {
                    console.info(response)
                    let re = response.data;
                    this.data = re.datas.datas;
                    console.info(this.data)

                }
            )
        },
        addParam() {
            let a = {
                name: this.name,
                type: this.type,
                isnull: this.isnull,
                iskey: this.iskey
            }
            this.params.push(a)
        }
    }
}
</script>
